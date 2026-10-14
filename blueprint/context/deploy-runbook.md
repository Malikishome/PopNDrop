# Deployment runbook - Vercel

Corrected after discovering this app is deployed from its own standalone
repo (`github.com/Malikishome/PopNDrop`), not as a subdirectory of a larger
monorepo. An earlier version of this runbook assumed a subdirectory setup
and a `vercel.json` build-config file; neither applies. Vercel already
builds this repo directly with zero config (standard Vite auto-detection:
`npm install`, `npm run build`, output `dist/`).

## Already live

The Vercel project is connected to this repo and deploying successfully at
https://popndrop-three.vercel.app/. No reconnection or build-config change
is needed - every push to this repo's default branch triggers a new
deploy automatically.

## Environment variables

Confirm these five are set in the Vercel project (Project Settings ->
Environment Variables) for the **Production** environment. Values come
from the local `.env` file at the repo root - never commit them:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Smoke-test after a deploy

- Load the site, confirm it renders hero through footer
- Submit the request form with test data, confirm the success screen
  appears (with the submitter's name) and no console errors show in the
  browser dev tools
- Check the Supabase `leads` table for the new row
- Check that the EmailJS notification arrived

## A note on repo hygiene

This app used to also be tracked as plain files inside a separate,
unrelated outer repo (`Vending-Machine-LLC`), which caused real confusion:
fixes committed there never reached this repo, and therefore never
reached production, until someone noticed and re-applied them here. This
repo is now the single source of truth for both the app and its Blueprint
workflow files. Don't let the app's files get copied into another repo
again without a clear reason.
