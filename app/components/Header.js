import { Fragment, useState,useEffect} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
  { name: 'General Name', description: 'Welcome Page for specified name', href: '/hello?name=John'},
  { name: 'Elanore', description: `See Elanore's informations`, href: '/hello?name=Elanore'},
  { name: 'Noe', description: `See Noe's informations`, href: '/hello?name=Noe'},
  { name: 'Solveig', description: `See Solveig's informations`, href: '/hello?name=Solveig'},
  { name: 'Error', description: 'No names specified', href: '/hello?test'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // call to api profile
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (response.status === 200) {
          const data = await response.json();
          setProfile(data);
        } else if (response.status === 401) {
          // not connected (HTTP 401)
          setProfile(null); 
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error);
        setProfile(null); 
      }
    };
    fetchUserProfile();
  }, []);

  const handleLogoutClick = () => {
    setProfile(null); 
  };
  const handleLoginClick  = async () => {
    try {
      const response = await fetch('/api/profile');
      if (response.status === 200) {
        const data = await response.json();
        setProfile(data);
      } else if (response.status === 401) {
        setProfile(null);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du profil :', error);
      setProfile(null);
    }
  };

  return (
    <header className="bg-blueEce">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <span className="sr-only">MyStore</span>
          <Link href={`/`}>
            <img className="h-12 w-auto" src="/logo.png" alt="Mystore Logo"/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-right">
          <Link href={`/articles`} className="text-sm font-semibold leading-6 text-gray-900 text-white hover:text-darkblue">
              Articles
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <Link href={`/about`} className="text-sm font-semibold leading-6 text-gray-900 text-white hover:text-darkblue">
                  About Us
              </Link>
              <ChevronDownIcon className="h-5 w-5 flex-none text-white hover:text-darkblue" aria-hidden="true"/>
            </Popover.Button>
            <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-blueEce custom-shadow ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-white leading-6 hover:bg-darkblue">
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-whiteSpecial italic">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link href={`/contacts`} className="text-sm font-semibold leading-6 text-white hover:text-darkblue">
              Contact Us
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {profile ? (
            <div class="flex items-center space-x-4">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <img
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  src={profile.img}
                  alt="User dropdown"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  />
                  <div class="font-medium text-white">
                      <div>{profile.username}</div>
                      <div class="text-sm text-darkblue">{profile.email}</div>
                  </div>
                </Popover.Button>
                <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-50 overflow-hidden rounded-3xl bg-whiteSpecial shadow w-44 ring-1 ring-gray-900/5">
                    <div class="px-4 py-3 text-sm text-blueEce dark:text-white">
                      <div class="font-bold truncate">{profile.username}</div>
                      <div class="font-medium truncate">{profile.email}</div>
                    </div>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-darkblue text-center">Setting</a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <button onClick={handleLogoutClick} class="w-44 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-darkblue dark:hover:text-white">Sign out</button>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>    
          ) : (
            <button onClick={handleLoginClick}className="text-sm font-semibold leading-6 text-white hover:text-darkblue">
              Log In →
            </button>
          )}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blueEce px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={`/`} className="-m-1.5 p-1.5">
              <span className="sr-only">MyStore</span>
              <img className="h-14 w-auto" src="/logo.png" alt="Mystore Logo"/>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)} >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {profile ? (
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
                                src={profile.img}
                                alt="User dropdown"
                                className="w-10 h-10 rounded-full cursor-pointer"
                              />
                              <div class="font-medium text-white flex flex-col">
                                  <div>{profile.username}</div>
                                  <div class="text-sm text-darkblue">{profile.email}</div>
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
                              <button onClick={handleLogoutClick} class="text-left w-full block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-darkblue">Sign out</button>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                ):(
                  <div></div>
                )}
                <Link href={`/articles`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-darkblue">
                  Articles
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-darkblue">
                        <Link href={`/about`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-darkblue">
                            About Us
                        </Link>
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none text-white')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-darkblue"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link href={`/contacts`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-darkblue">
                    Contact Us
                </Link>
                {profile ? (
                  <div> </div>
                ):(
                  <div class="py-6">
                  <button onClick={handleLoginClick} className="w-full text-left -mx-3 block rounded-lg px-3 py-2.5 text-white font-semibold leading-7 text-gray-900 hover:bg-darkblue">
                    Log In →
                  </button>
                </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}