# AnEmpire deployment and release operations

## Current hosted demo

Vercel project: `anempire-marketplace` in team `AnEmpire`.

- Git repository: `sumiEmpire001/E_commerce-website`
- Root directory: `storefront`
- Framework: Other / static
- Output directory: `.`
- Build command: none
- Demo: `https://anempire-marketplace-an-empire.vercel.app/`

The current deployment is a **sample-data storefront**, not a live transaction system. The team's Vercel Authentication protection may require a signed-in team member; do not assume public visitors can access it.

## Release checks

1. Confirm the GitHub Actions unit and browser jobs are green for the **exact** commit being released.
2. Check the Vercel deployment status is `READY` and the commit SHA matches.
3. Open the deployment on mobile and desktop. Verify home, product search, category filters, cart updates, refresh persistence, disabled checkout and 404 handling.
4. Check response headers (CSP, no-sniff, frame restrictions), console errors and accessibility.
5. Do not merge the draft PR solely because the demo works. Real commerce needs a deployed database, auth and server-side checkout.
6. If a release regresses, redeploy a known-good commit using Vercel deployment history; never modify production database state to fix a frontend regression.

## Required before a public marketplace launch

- Dedicated Supabase development/production project(s), with RLS tests for multiple users.
- Verified sign-up/sign-in/password recovery and seller onboarding.
- Database-backed products and images, secure seller dashboard, inventory reservations.
- Order lifecycle, refunds and admin support.
- Payment provider account, server-side webhook verification, idempotency and reconciliation.
- Privacy policy, terms, seller policies and legal/compliance review.
- Rate limits, monitoring, backups, incident response and security testing.

Never put Supabase secret keys or payment provider secret keys in browser JavaScript or Git history. Public configuration must be separated from private server credentials.
