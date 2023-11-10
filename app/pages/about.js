import Head from 'next/head'
import Layout from '../components/Layout.js'
import Link from 'next/link';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>MyStore - About us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className='wt-title text-darkblue text-center'> <span>About</span> us </h1>
        <p className=" text-xl italic font-bold text-darkblue"><Link href="/hello?name=John">- Hello page with a general name (here John), you can change it in the http link</Link></p>
        <p className=" text-xl italic font-bold text-darkblue"><Link href="/hello?test">- Error page when no name is provided</Link></p>
      </div>
      <br></br>
      <ul role="list" className="divide-y divide-gray-100">
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/elanore.jpg" alt="ElaImg"/>
            <div className="min-w-0 flex-auto">
              <Link href="/hello?name=Elanore">
                <p className="text-sm font-semibold leading-6 text-gray-900">Elanore LELIEVRE</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">elanore.lelievre@edu.ece.fr</p>
              </Link>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Co-Founder</p>
            <p className="mt-1 text-xs leading-5 text-gray-500">MyStore</p>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="" alt="NoeImg"/>
            <div className="min-w-0 flex-auto">
              <Link href="/hello?name=Noe">
                <p className="text-sm font-semibold leading-6 text-gray-900">Noé PHAM</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">noe.pham@edu.ece.fr</p>
              </Link>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Co-Founder</p>
            <p className="mt-1 text-xs leading-5 text-gray-500">MyStore</p>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/solveig.jpg" alt="SolImg"/>
            <div className="min-w-0 flex-auto">
              <Link href="/hello?name=Solveig">
                <p className="text-sm font-semibold leading-6 text-gray-900">Solveig BERLING</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">solveig.beirling@edu.ece.fr</p>
              </Link>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Co-Founder</p>
            <p className="mt-1 text-xs leading-5 text-gray-500">MyStore</p>
          </div>
        </li>
      </ul>
    </Layout>
  ) 
}
