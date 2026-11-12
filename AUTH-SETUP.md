# Original AnEmpire authentication setup

The original four-stage registration and sign-in pages are now wired to Supabase Auth REST endpoints. **No live backend is connected yet**.

1. Create a dedicated AnEmpire Supabase project after confirming the organization and any project cost.
2. In `anempire-config.js`, set `supabaseUrl` to the project HTTPS URL and `publishableKey` to its `sb_publishable_` key. These are public client configuration values. **Never commit service-role, secret, database passwords, or payment credentials.**
3. Configure allowed site URL and redirect URLs in Supabase Auth settings. Decide whether email confirmation is required. Confirm that the registration flow behaves correctly with that setting.
4. Test signup, sign-in, incorrect password, unverified email, password recovery, and sign-out with real test users before making the site public.
5. The sign-in session is currently tab-scoped and has no automatic refresh. Add tested token refresh, sign-out and server-side authorization before production use.
6. Signup sends only email, password, username, first name and last name to Supabase Auth metadata. **No business, birth date or address data is persisted.** Never treat user-editable metadata as seller/admin authorization.
7. Seller management and real commerce require database RLS policies, order/inventory validation and server-side payments. The existing marketplace is a sample-data demo only.

The app intentionally fails closed if the Supabase URL or publishable key is absent or invalid. There is no fake account creation or local password storage.
