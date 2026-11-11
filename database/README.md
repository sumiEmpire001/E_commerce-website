# Proposed AnEmpire development database

`schema.dev.sql` is a **draft** Supabase/PostgreSQL schema for an isolated development environment. It has **not** been applied to a live database.

## What it defines

- `seller_profiles` tied to `auth.users.id`.
- `products` with integer **kobo** prices, nonnegative stock and draft/published/archived states.
- RLS: sellers can manage their own records; anonymous users can read only published products.
- Public and authenticated API grants scoped to the tables.

## Security verification before use

1. Create a disposable Supabase project; review the SQL for compatibility with its existing schema and migration history.
2. Run the SQL once only on that isolated project. The `CREATE POLICY` statements are not idempotent.
3. Create seller A, seller B, and an anonymous session. Confirm A cannot read B's private profile or draft products, cannot modify B's products, and cannot change a product's `seller_id` to B.
4. Confirm anonymous sessions can read published products but cannot insert, update or delete them.
5. Confirm published prices and stock cannot be changed by buyers. Never trust browser-submitted totals or inventory.
6. Run Supabase database security advisors and review grants and RLS before deploying.
7. Add audited order/line-item tables and server-side inventory reservation **before** implementing checkout or payment webhooks.

**No API credentials, database project references or production configuration belong in this repository.** Use only publishable keys in browser clients. Keep service-role keys on a trusted server.

This schema is a foundation for seller/product access, not a complete commerce backend.
