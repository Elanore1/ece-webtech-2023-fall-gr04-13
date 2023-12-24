import Head from 'next/head'
import Layout from '../components/Layout.js'
import {useUser} from '../components/UserContext.js'
import { useRouter } from 'next/router'
import { supabaseClient } from '../components/supabaseClient'
import { useState , useEffect} from 'react'

export default function Page(){
    const {user} = useUser()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [profile, setProfile] = useState(null)
    const [gravatarUrl, setGravatarUrl] = useState(null)
    const router = useRouter()

    const handleLogout = async ()=>{
        await supabaseClient.auth.signOut()
        router.push('/')
    }

    async function deleteAccount() {
        try {
          if (!user) throw new Error('No user')
          await supabaseClient.from('profiles').update({
            about: null,
            first_name: null,
            last_name: null,
            phone: null,
            country:null,
            city:null,
            department: null,
            postal_code: null
        }).eq('id',user.id)
          alert('Account deleted successfully!')
        } catch (error) {
          alert('Error deleting the account!')
          console.log(error)
        } finally {
          setIsModalOpen(false)
          await supabaseClient.auth.signOut()
          router.push('/')
        }
    }

    useEffect(() => {
        if(user){
            async function fetchData(){
                let { data, error} = await supabaseClient.from('profiles')
                .select('*')
                .eq('id',user.id)
                setProfile(data[0])
            }
            fetchData()
            //Gravatar URL
            const CryptoJS = require("crypto-js")
            const lowercaseEmail = user.email.toLowerCase()
            const md5Hash = CryptoJS.MD5(lowercaseEmail).toString()
            setGravatarUrl(`https://www.gravatar.com/avatar/${md5Hash}?d=mp`)
        }
    },[user])
    
    return (
        <Layout>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                <div className="bg-blueEce p-4 border-t-2 border-darkblue rounded-t">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                        <img
                            className="w-10 h-10 object-cover rounded-full"
                            alt="User avatar"
                            src={gravatarUrl}
                        />
                        <h1 className="text-white">{profile?.username || 'Username'} </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white space-y-6">
                    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 mx-auto max-w-sm">Public Account</h2>
                        <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                            <div>
                                <label className="text-sm text-gray-400">Username</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-400 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.username || 'Username'} disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Country</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-gray-400 mx-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                        </svg>
                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.country || 'Country'}  disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">About</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-gray-400 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </div>
                                    <textarea type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.about || 'About you'}  disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Last signed in : { Date(user?.identities.last_sign_in_at)}</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 mx-auto max-w-sm">Personal Information</h2>
                        <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                            <div>
                                <label className="text-sm text-gray-400">First name</label>
                                <div className="w-full inline-flex border">
                                    <div className="w-1/12 pt-2 bg-gray-100">
                                        <svg
                                        fill="none"
                                        className="w-6 text-gray-400 mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                        </svg>
                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.first_name !== null ?  profile?.first_name : 'Firstname'} disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Last name</label>
                                <div className="w-full inline-flex border">
                                    <div className="w-1/12 pt-2 bg-gray-100">
                                        <svg
                                        fill="none"
                                        className="w-6 text-gray-400 mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                        </svg>
                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.last_name !== null ?  profile?.last_name : 'Lastname'} disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Email</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                        <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <input type="email" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={user?.email || 'Email'} disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Phone number</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100">
                                        <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.phone !== null ?  profile?.phone : '06XXXXXXXX'} disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 mx-auto max-w-sm">Address Information</h2>
                        <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                            <div>
                                <label className="text-sm text-gray-400">City</label>
                                <div className="w-full inline-flex border">
                                    <div className="w-1/12 pt-2 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-gray-400 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.city !== null ?  profile?.city : 'City'} disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">State/Department</label>
                                <div className="w-full inline-flex border">
                                    <div className="w-1/12 pt-2 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-gray-400 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                                    </svg>

                                    </div>
                                    <input type="text" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.department !== null ?  profile?.department : 'State'} disabled/>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">ZIP/Postal Code</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-gray-400 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>

                                    </div>
                                    <input type="email" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder={profile?.postal_code !== null ?  profile?.postal_code : 'Postal code'} disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="w-full p-4 text-right text-gray-500">
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="inline-flex items-center focus:outline-none mr-4" onClick={() => setIsModalOpen(true)}>
                            <svg fill="none" className="w-4 mr-2" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                            Delete account
                        </button>
                        <button className="inline-flex items-center focus:outline-none mr-4" onClick={handleLogout}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete Profile Information</h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">Are you sure you want to delete your profile informations? All of your data will be permanently removed. This action cannot be undone.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" onClick={deleteAccount} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Delete</button>
                        <button type="button" onClick={() => setIsModalOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            )}
        </Layout>
    )
}