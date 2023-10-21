import Head from 'next/head'
import Layout from '../components/Layout.js'
import Link from 'next/link';
//import styles from '../styles/Layout.module.css'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>MyStore - About us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className='wt-title text-darkblue text-center'> About us </h1>
        <p className=" text-xl italic font-bold text-darkblue"><Link href="/hello?name=John">- Hello page with a general name (here John), you can change it in the http link</Link></p>
        <p className=" text-xl italic font-bold text-darkblue"><Link href="/hello?test">- Error page when no name is provided</Link></p>
      </div>
      <br></br>
      <ul role="list" class="divide-y divide-gray-100">
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="/elanore.jpg" alt="ElaImg"/>
            <div class="min-w-0 flex-auto">
              <Link href="/hello?name=Elanore">
                <p class="text-sm font-semibold leading-6 text-gray-900">Elanore LELIEVRE</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">elanore.lelievre@edu.ece.fr</p>
              </Link>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Co-Founder</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">MyStore</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="" alt="NoeImg"/>
            <div class="min-w-0 flex-auto">
              <Link href="/hello?name=Noe">
                <p class="text-sm font-semibold leading-6 text-gray-900">Noé PHAM</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">noe.pham@edu.ece.fr</p>
              </Link>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Co-Founder</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">MyStore</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="/solveig.jpg" alt="SolImg"/>
            <div class="min-w-0 flex-auto">
              <Link href="/hello?name=Solveig">
                <p class="text-sm font-semibold leading-6 text-gray-900">Solveig BERLING</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">solveig.beirling@edu.ece.fr</p>
              </Link>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Co-Founder</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">MyStore</p>
          </div>
        </li>
      </ul>
    </Layout>
  ) 
}
