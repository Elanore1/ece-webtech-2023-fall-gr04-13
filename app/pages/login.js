import { supabaseClient } from '@/components/supabaseClient.js'
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'
import Head from 'next/head'
import Layout from '../components/Layout.js'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {useUser} from '../components/UserContext.js'
import Link from 'next/link'

const Login = () => {
    const [session, setSession] = useState(null)
    const [authEvent, setAuthEvent] = useState(null)
    const {user} = useUser()
    const router = useRouter()

    useEffect(() => {
        supabaseClient.auth.getSession().then(({data: {session}}) => {
            setSession(session)
        })
        supabaseClient.auth.onAuthStateChange(async (event, session) => {
            setSession(session)
            setAuthEvent(event)
            if (event === 'SIGNED_IN') {
                router.push('/profile')
            }
        })
        
    }, [session,router])

    const getURL = () => {
        let url = process?.env?.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/profile"
        return url
    }

    return (
        <Layout>
        <Head>
            <title>Login</title>
            <meta name="description" content="Don't be shy, drop us an email" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div> 
            {
                !session ? <>
                    <Auth supabaseClient={supabaseClient} appearance={{
                        style: {
                            button: { background: '#007179', color: 'white' },
                        },
                        theme: ThemeSupa
                    }} 
                    providers={['github']}
                    redirectTo ={getURL()} 
                    />
                </> : <>
                <div className="grid min-h-full place-items-center bg-whiteSpecial px-6 py-24 sm:py-32 lg:px-7">
                    <div className="text-center">
                    <p className="text-base font-semibold text-blueEce sm:text-3xl">Welcome Back {user.name} ! </p>
                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-darkblue sm:text-2xl">See what you missed in your absence</h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" className="rounded-md bg-blueEce px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back</Link>
                        <Link href="/articles" className="text-sm font-semibold text-darkblue">See our Articles<span aria-hidden="true">&rarr;</span></Link>
                    </div>
                    </div>
                </div>
                </>
            }
        
        </div>
        </Layout>
    )
}
    
export default Login