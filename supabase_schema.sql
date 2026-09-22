-- Schema for Digital Wedding Invitation (Rifa & Rizky)
-- Execute this SQL query in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- 1. Create table rsvp_guestbook
create table if not exists public.rsvp_guestbook (
  id uuid default gen_random_uuid() primary key,
  guest_name text not null,
  attendance text not null check (attendance in ('hadir', 'tidak')),
  guest_count integer default 1 check (guest_count >= 1),
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.rsvp_guestbook enable row level security;

-- 3. Create policies to allow public insertion and public viewing
create policy "Allow public insert to rsvp_guestbook"
  on public.rsvp_guestbook
  for insert
  with check (true);

create policy "Allow public read access on rsvp_guestbook"
  on public.rsvp_guestbook
  for select
  using (true);

-- 4. Enable Realtime (Optional)
alter publication supabase_realtime add table public.rsvp_guestbook;
