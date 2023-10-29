import {useContext,Fragment,useState} from 'react';
import UserContext from './UserContext'
import { Disclosure,Popover, Transition } from '@headlessui/react'

const LoggedIn = () => {
    const {user, logout} = useContext(UserContext)
    const isSmallScreen =  window.innerWidth <= 768
    const onClickLogout = ()=>{
        logout()
    }
    return (
        <div>
        {isSmallScreen ? (
            <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
                    <div  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white flex items-center space-x-4">
                        <img
                        id="avatarButton"
                        type="button"
                        data-dropdown-toggle="userDropdown"
                        data-dropdown-placement="bottom-start"
                        src={user.img}
                        alt="User dropdown"
                        className="w-10 h-10 rounded-full cursor-pointer"
                        />
                        <div class="font-medium text-white flex flex-col">
                            <div>{user.username}</div>
                            <div class="text-sm text-darkblue">{user.email}</div>
                        </div>
                    </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                    <ul class="py-2 text-sm" aria-labelledby="avatarButton">
                        <li>
                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-darkblue">Setting</a>
                        </li>
                    </ul>
                    <div class="py-1">
                        <button onClick={onClickLogout} class="text-left w-full block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-darkblue">Sign out</button>
                    </div>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
        ):(
            <Popover.Button className=" lg:px-8 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <img
                    id="avatarButton"
                    type="button"
                    data-dropdown-toggle="userDropdown"
                    data-dropdown-placement="bottom-start"
                    src={user.img}
                    alt="User dropdown"
                    className="w-10 h-10 rounded-full cursor-pointer" />
                <div class="font-medium text-white">
                    <div>{user.username}</div>
                    <div class="text-sm text-darkblue">{user.email}</div>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-50 overflow-hidden rounded-3xl bg-whiteSpecial shadow w-44 ring-1 ring-gray-900/5">
                        <div class="px-4 py-3 text-sm text-blueEce dark:text-white">
                            <div class="font-bold truncate">{user.username}</div>
                            <div class="font-medium truncate">{user.email}</div>
                        </div>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-darkblue text-center">Setting</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <button onClick={onClickLogout} class="w-44 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-darkblue dark:hover:text-white">Sign out</button>
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