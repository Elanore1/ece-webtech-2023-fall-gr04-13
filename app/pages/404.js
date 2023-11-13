// pages/404.js
import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/Layout.js';
//import styles from '../styles/Layout.module.css'

function Custom404() {
  return (
    <main className="grid min-h-screen place-items-center bg-whiteSpecial px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-blueEce text-4xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-darkblue sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded-md bg-blueEce px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
          <Link href="/contacts" className="text-sm font-semibold text-darkblue">Contact support <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </main>
  );
}

export default Custom404;   
