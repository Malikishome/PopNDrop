-- This project doesn't auto-grant table privileges to service_role, so the
-- submit-lead Edge Function failed with permission errors. Grant only what
-- the function needs.
grant select, insert on public.lead_submission_log to service_role;
grant insert on public.leads to service_role;
