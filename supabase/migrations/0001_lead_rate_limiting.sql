-- Tracks one row per lead submission attempt, keyed by client IP, so the
-- submit-lead Edge Function can enforce a rate limit server-side (the
-- anon key is public in the browser bundle, so this can't rely on the
-- client behaving - it has to be enforced on the DB/function side).
create table if not exists public.lead_submission_log (
  id bigint generated always as identity primary key,
  ip text not null,
  created_at timestamptz not null default now()
);

create index if not exists lead_submission_log_ip_created_at_idx
  on public.lead_submission_log (ip, created_at desc);

alter table public.lead_submission_log enable row level security;
-- No policies are created: with RLS on and zero policies, every role
-- except service_role (which bypasses RLS entirely) is denied all access.
-- Only the submit-lead Edge Function (using the service_role key) reads
-- or writes this table.
