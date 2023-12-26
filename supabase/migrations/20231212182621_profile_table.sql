create table public.profiles (
  id uuid not null references auth.users  on delete cascade primary key,
  updated_at timestamp with time zone,
  username text,
  about text,
  first_name text,
  last_name text,
  phone text,
  country text,
  city text,
  department text,
  postal_code text,

  constraint username_length check (char_length(username) >= 3)
);

alter table public.profiles 
  enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

create policy "Users can delete a profile."
  on profiles for delete
  to authenticated
  using ( auth.uid() = id );

create function public.handle_new_user()
returns trigger
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- adding fts for search in articles
alter table
  articles
add column
  fts tsvector generated always as (to_tsvector('english', title || ' ' || tag || ' ' || categories || ' ' || content)) stored;

create index articles_fts on articles using gin(fts); -- generate the index