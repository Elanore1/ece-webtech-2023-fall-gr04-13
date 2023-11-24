# ECE Web Technologies LAB9

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

We use Supabase Auth UI component in our login page and integrate OAuth with supabase (registration with github account)

## Description

- Activate Supabase Auth UI authentification

```javascript
<Auth supabaseClient={supabaseClient} appearance={{
    style: {
        button: { background: '#007179', color: 'white'},
    },
    theme: ThemeSupa
}} 
providers={['github']}
/>
```

- Pass OAuth tutorial (install dex)

```bash
# Install
git clone https://github.com/dexidp/dex.git
cd dex
make build
# Start
./bin/dex serve examples/config-dev.yaml
```

- Integration of OAuth with supabase

In the config.toml file, we enable the github auth :
```javascript
[auth.external.github]
enabled = true
client_id = "env(GOTRUE_EXTERNAL_GITHUB_CLIENT_ID)"
# DO NOT commit your OAuth provider secret to git. Use environment variable substitution instead:
secret = "env(GOTRUE_EXTERNAL_GITHUB_SECRET)"
# Overrides the default auth redirectUrl.
redirect_uri = "env(GOTRUE_EXTERNAL_GITHUB_REDIRECT_URI)"
# Overrides the default auth provider URL. Used to support self-hosted gitlab, single-tenant Azure,
# or any other third-party OIDC providers.
url = ""
```
We have to configure this environnment variable :

```javascript
GOTRUE_EXTERNAL_GITHUB_CLIENT_ID=
GOTRUE_EXTERNAL_GITHUB_SECRET=
GOTRUE_EXTERNAL_GITHUB_REDIRECT_URI=
```
## Running/Usage instruction

We can run the application with :

```bash
npx supabase start
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:54323/project/default](http://localhost:54323/project/default) to get the acces to the database. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Name

Elanore Lelièvre, Solveig Berling, Noé Pham

