import Head from 'next/head'
import Layout from '../components/Layout.js'
import Link from 'next/link';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>About us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <section className="bg-white rounded">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  <div className="max-w-lg">
                    <h1 className='wt-title text-darkblue text-center'> <span>About</span> us </h1>
                    <p className="mt-4 text-darkblue text-lg">We are a group of 4th year students at ECE Paris. This site is the result of a semester of group work, during which we tested and discovered the different frameworks and libraries of Next.js with React. We're very proud to present our site, so don't hesitate to sign up and participate if you're interested in fashion and clothing.</p>
                  </div>
                  <div className="mt-12 md:mt-0">
                      <img src="https://www.planetegrandesecoles.com/wp-content/uploads/2020/04/ECE-PARIS-CAMPUS-PGE-850x560.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
                  </div>
              </div>
          </div>
      </section>
        <div className="mt-5 max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className='wt-title text-2xl text-darkblue text-center'><span>How we</span> work?</h1>
          </div>
          <div className="mt-7 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-white border-white sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-darkblue transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path d="M10 10l2 -2v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition">Initial Discussion</h5>
                  <p className="text-gray-300">First, we discuss who would like to do what, and how best to divide up the work.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-blueEce transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="white" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Deal Finalized</h5>
                  <p className="text-gray-300">Once we've divided up the tasks, we'll each get to work on developing our own branch.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-darkblue transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path
                    d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
                  </path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Product Delivery</h5>
                  <p className="text-gray-300">We had to get organized right from the start to make progress every week and be able to hand over the site on 29/12/2023.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-blueEce transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" color="white" height="50" width="50"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                  </path>
                  <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
                  <path d="M14 8v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Celebration
                  </h5>
                  <p className="text-gray-300">Now that we've finished, we can celebrate all our efforts!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <ul role="list" className="mt-8 divide-y divide-gray-100">
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
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://avatars.githubusercontent.com/u/81435956?v=4" alt="NoeImg"/>
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
