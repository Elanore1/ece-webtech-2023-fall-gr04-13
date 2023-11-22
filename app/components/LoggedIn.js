import {useContext,Fragment} from 'react';
import {useUser} from './UserContext'
import { Disclosure,Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LoggedIn = () => {
    const {user} = useUser()
    const {signOut} = useUser()
    const router = useRouter()
    const isSmallScreen =  window.innerWidth <= 768
    
    const onClickLogout = ()=>{
        signOut()
        router.push('/login')
    }

    return (
        <div>
        {isSmallScreen ? (
            <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white flex items-center space-x-4">
                        <img class="w-10 h-10 rounded-full cursor-pointer" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
                        <div className="font-medium text-white flex flex-col">
                            <div>{user.email}</div>
                            <div className="text-sm text-darkblue">{user.email}</div>
                        </div>
                    </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                    <ul className="py-2 text-sm" aria-labelledby="avatarButton">
                        <li>
                            <Link href={`/setting`}  className="flex block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-darkblue">
                                Setting
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <div className="py-1">
                        <button onClick={onClickLogout} className="flex text-left w-full block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-darkblue group">
                            Sign out  
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </button>
                    </div>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
        ):(
            <Popover.Button className=" lg:px-8 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <img class="w-10 h-10 rounded-full cursor-pointer" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
                <div className="font-medium text-white">
                    <div>{user.email}</div>
                    <div className="text-sm text-darkblue">{user.email}</div>
                </div>
                <div className="indicator ml-4">
                    <Link href ='#'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> </Link>
                </div> 
                <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-50 overflow-hidden rounded-3xl bg-whiteSpecial shadow w-44 ring-1 ring-gray-900/5">
                        <div className="px-4 py-3 text-sm text-blueEce dark:text-white">
                            <div className="font-bold truncate">{user.email}</div>
                            <div className="font-medium truncate">{user.email}</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <Link href={`/profile`} className="block flex px-4 py-2 hover:bg-gray-100 text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                </svg>

                                    <span className='ml-4'>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/setting`} className="block flex px-4 py-2 hover:bg-gray-100 text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className='ml-4'>Setting</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block flex px-4 py-2 hover:bg-gray-100 text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className='ml-4'>Basket</span>
                                </a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <button onClick={onClickLogout} className="flex w-44 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"aria-hidden="true" className="h-6 w-6">
                                    <path stroke-linecap="round"stroke-linejoin="round"d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                                    ></path>
                                </svg>
                                <span className='ml-4'>Sign out</span>
                            </button>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover.Button>
        ) 
        }
        </div>
    )
}

export default LoggedIn;