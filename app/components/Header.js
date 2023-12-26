import { Fragment, useState,useEffect,useContext} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import Link from 'next/link'
//User import
import {useUser} from './UserContext'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  { name: 'General Name', description: 'Welcome Page for specified name', href: '/hello?name=John'},
  { name: 'Elanore', description: `See Elanore's informations`, href: '/hello?name=Elanore'},
  { name: 'Noe', description: `See Noe's informations`, href: '/hello?name=Noe'},
  { name: 'Solveig', description: `See Solveig's informations`, href: '/hello?name=Solveig'},
  { name: 'Error', description: 'No names specified', href: '/hello?test'},
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {user} = useUser()
  const router = useRouter()
  const [formData, setFormData] = useState({
    search : ''
  })

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(formData.search)
    if(formData.search.length === 0)
      router.push(`/articles`)
    else
      router.push(`/articles?search=${formData.search}`)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData,
        [name]: value,
    })    
    if(value.length===0)
      router.push(`/articles`)
  }

  return (
    <header className="bg-blueEce fixed top-0 w-full z-50">
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
          <Link href={`/contacts`} className="flex text-sm font-semibold leading-6 text-white hover:text-darkblue">
              Contact Us
          </Link>
        </Popover.Group>
        <form onSubmit={handleSearch}>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" onChange={handleInputChange} id="search" name="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-darkblue focus:border-darkblue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search articles, content"/>
            </div>
        </form>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <div className="flex items-center space-x-4">
              <Popover className="relative">
                <LoggedIn />
              </Popover>
            </div>    
          ) : (
            <div>
              <LoggedOut /> 
            </div>
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
                {user ? (
                  <LoggedIn/>
                ):(
                  <div></div>
                )}
                <Link href={`/articles`} className="flex -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-darkblue">
                  Articles
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                </svg>
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-darkblue">
                        <Link href={`/about`} className="flex -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-darkblue">
                            About Us                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
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
                <Link href={`/contacts`} className="flex -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-darkblue">
                    Contact Us 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                    </svg>
                </Link>
                {user ? (
                  <div> </div>
                ):(
                  <div className="py-6">
                      <LoggedOut /> 
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