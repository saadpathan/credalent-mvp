-- Create a table for the waitlist
create table public.waitlist_entries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  university text not null,
  field_of_study text not null,
  tng_wallet_number text not null,
  status text default 'pending' -- 'pending', 'approved', 'rejected'
);

-- Set up Row Level Security (RLS)
alter table public.waitlist_entries enable row level security;

-- Create a policy that allows anyone to insert data (since it's a public form)
create policy "Enable insert for everyone" on public.waitlist_entries
  for insert with check (true);

-- Create a policy that allows only authenticated users (admins) to view data
-- Note: You'll need to set up authentication to use this effectively in a real admin dashboard.
-- For now, we can just allow read access to service role or authenticated users if you implement auth later.
-- This policy is just a placeholder to deny public read access by default.
create policy "Enable read access for authenticated users only" on public.waitlist_entries
  for select using (auth.role() = 'authenticated');
