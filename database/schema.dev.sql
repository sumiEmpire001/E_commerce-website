-- AnEmpire draft schema. Review and apply only to an isolated development project.
-- Do not run against an existing production database without a migration review.
create extension if not exists pgcrypto;

create table if not exists public.seller_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  shop_name text not null check (char_length(trim(shop_name)) between 2 and 100),
  bio text not null default '' check (char_length(bio) <= 1000),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references public.seller_profiles(user_id) on delete cascade,
  name text not null check (char_length(trim(name)) between 2 and 160),
  description text not null default '' check (char_length(description) <= 5000),
  price_kobo bigint not null check (price_kobo > 0),
  stock integer not null default 0 check (stock >= 0),
  category text not null check (char_length(trim(category)) between 2 and 80),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now()
);

create index if not exists products_published_category_idx
  on public.products (category, created_at desc) where status = 'published';
create index if not exists products_seller_idx on public.products (seller_id);

alter table public.seller_profiles enable row level security;
alter table public.products enable row level security;

-- Only the owner can access or mutate a seller profile.
create policy "seller_profile_read_own" on public.seller_profiles
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "seller_profile_insert_own" on public.seller_profiles
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "seller_profile_update_own" on public.seller_profiles
  for update to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
create policy "seller_profile_delete_own" on public.seller_profiles
  for delete to authenticated using ((select auth.uid()) = user_id);

-- Published listings are public; drafts and archived listings belong to the seller.
create policy "products_read_published" on public.products
  for select to anon, authenticated using (status = 'published');
create policy "products_read_own" on public.products
  for select to authenticated using ((select auth.uid()) = seller_id);
create policy "products_insert_own" on public.products
  for insert to authenticated with check ((select auth.uid()) = seller_id);
create policy "products_update_own" on public.products
  for update to authenticated using ((select auth.uid()) = seller_id)
  with check ((select auth.uid()) = seller_id);
create policy "products_delete_own" on public.products
  for delete to authenticated using ((select auth.uid()) = seller_id);

revoke all on public.seller_profiles, public.products from anon, authenticated;
grant select, insert, update, delete on public.seller_profiles to authenticated;
grant select on public.products to anon;
grant select, insert, update, delete on public.products to authenticated;

-- Important: PostgreSQL grants UPDATE to all columns here; seller_id remains
-- constrained by the RLS WITH CHECK policy. Verify policy behavior with
-- two separate authenticated test users before exposing live data.
