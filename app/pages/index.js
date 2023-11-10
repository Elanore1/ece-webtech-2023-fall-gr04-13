import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import Image from 'next/image'

export default function Page(){
  return (
    <Layout>
      <Head>
        <title>MyStore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <div className="items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <video className='mb-90 w-full rounded' height="300" width="300" autoPlay loop muted> 
              <source src="/logoAnimated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="mt-4 md:mt-0">
                <h2 className="text-4xl tracking-tight font-extrabold text-darkblue">Let's found more tools and ideas that brings us together.</h2>
                <p className="font-light text-gray-700 md:text-lg dark:text-gray-400">From now on, find our best products directly on our website. Take a look at our style sheets and imagine your outfits! We've got it all, so you're bound to find what you're looking for.</p>
            </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4 text-center text-white text-shadow-blue">
          <div className="row-start-2 row-span-2 font-bold bg-blueEce rounded-md p-8 hover:bg-darkblue">
            <Link href="/articles">
              Our Clothes ➔
            </Link>
          </div>
          <div className="row-end-3 row-span-2 font-bold bg-blueEce rounded-md p-8 hover:bg-darkblue">
            <Link href="/about">
              About us ➔
            </Link>
          </div>
          <div className="flex items-center justify-center font-bold row-start-1 row-end-4 bg-blueEce rounded-md p-8 hover:bg-darkblue">
            <Link href="/contacts">
              Contact us ➔
            </Link>
          </div>
        </div>
          <div className="mx-auto max-w py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-darkblue px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#007179" />
                  <stop offset="1" stop-color="#007179" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your Style.<br />Start using our app today.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">On the Mystore site, you can find our selection of clothes, shoes, jackets and accessories.<br></br>
                The content is updated regularly, so don't hesitate if you're looking for new items at the best prices!<br></br>
                The entire MyStore team is available to answer any questions or problems you may have in the contact section.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link href="/articles" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}