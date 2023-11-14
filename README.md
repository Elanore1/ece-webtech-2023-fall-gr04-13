# ECE Web Technologies LAB8

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

We install and use Supabase database in our project. THe supabase platform helps developpers in the creation of moder apps. It core services include database, authentication, file storage and auto-generated APIs. 

## Description

- Supabase Installation

- Creation of a Contacts table

- Integration of supabase in our next.js integration

- Inserting data into Supabase

- Using RLS for anonymous users
  
1) Install supabase

```bash
npx supabase init
```

2) Node.js integration 

Install the Node.js dependencies for Supabase:

```bash
npm add \
 @supabase/supabase-js \
 @supabase/auth-helpers-react @supabase/auth-helpers-nextjs
```
Save the environment variable :

```javascript
NEXT_PUBLIC_SUPABASE_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_ANON_KEY=XXXXXXXXXXXXX
```
Edit the _app.js :

```javascript
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient({ supabaseUrl, supabaseAnonKey }))
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    > 
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionContextProvider>
  )
}

```

To get data from supabase in our project :

```javascript
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const supabase = useSupabaseClient()

useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase.from('contacts').select(`id, firstname, lastname, email,subject`)
      setContacts(data)
    })()
  }, [])
```

To send data to supabasec:
```javascript
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const supabase = useSupabaseClient()

const {data,error}= await supabase.from('contacts').insert(
  {
    firstname:contact.firstName,
    lastname:contact.lastName,
    email:contact.email,
    subject:contact.subject,
    message:contact.message
  }
)
if (error) {
  console.error('Error inserting contact:', error);
} else {
  console.log('Contact inserted successfully:', data);
}
setContact({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})
```

Creation of two Row level security policy :

INSERT Enable insert access for anonymous
Applied to: anon

SELECT Restrict read acces for anonymous
Applied to: authenticated

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

