// Receives lead-form submissions, enforces a server-side rate limit per
// IP (the anon key is public in the browser bundle, so this can't be
// enforced client-side), then inserts into `leads` using the
// service_role key - which never leaves this function.
//
// Deploy with: supabase functions deploy submit-lead
// SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are
// provided automatically by the Supabase platform at runtime.

import { createClient } from "npm:@supabase/supabase-js@2";

const MAX_SUBMISSIONS_PER_HOUR = 5;
const MIN_SECONDS_BETWEEN_SUBMISSIONS = 20;
const MAX_FIELD_LENGTH = 1000;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("cf-connecting-ip") ?? "unknown";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "invalid_json" }, 400);
  }

  const companyName = String(payload.company_name ?? "").trim();
  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const reason = String(payload.reason ?? "").trim();
  const message = String(payload.message ?? "").trim();

  const allowedReasons = ["request-machine", "customer-support", "partnership", "other"];
  if (
    !companyName || !name || !email || !phone || !reason ||
    !allowedReasons.includes(reason) ||
    !isValidEmail(email) ||
    [companyName, name, email, phone, message].some((v) => v.length > MAX_FIELD_LENGTH)
  ) {
    return jsonResponse({ error: "invalid_input" }, 400);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const ip = getClientIp(req);
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000).toISOString();

  const { data: recentSubmissions, error: logReadError } = await supabase
    .from("lead_submission_log")
    .select("created_at")
    .eq("ip", ip)
    .gte("created_at", oneHourAgo)
    .order("created_at", { ascending: false });

  if (logReadError) {
    console.error("Error reading lead_submission_log:", logReadError);
    return jsonResponse({ error: "server_error" }, 500);
  }

  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    return jsonResponse({ error: "rate_limited" }, 429);
  }

  const mostRecent = recentSubmissions[0];
  if (mostRecent) {
    const secondsSinceLast = (now.getTime() - new Date(mostRecent.created_at).getTime()) / 1000;
    if (secondsSinceLast < MIN_SECONDS_BETWEEN_SUBMISSIONS) {
      return jsonResponse({ error: "rate_limited" }, 429);
    }
  }

  const { error: logWriteError } = await supabase
    .from("lead_submission_log")
    .insert([{ ip }]);

  if (logWriteError) {
    console.error("Error writing lead_submission_log:", logWriteError);
    return jsonResponse({ error: "server_error" }, 500);
  }

  const { error: insertError } = await supabase
    .from("leads")
    .insert([{
      company_name: companyName,
      name,
      email,
      phone,
      reason,
      message,
    }]);

  if (insertError) {
    console.error("Error inserting lead:", insertError);
    return jsonResponse({ error: "server_error" }, 500);
  }

  return jsonResponse({ success: true }, 200);
});
