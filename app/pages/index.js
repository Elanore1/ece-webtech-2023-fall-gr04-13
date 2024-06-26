import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { supabaseClient } from '@/components/supabaseClient.js'
import { useEffect, useState } from 'react'

export default function Page(){
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [newArticles, setnewArticles] = useState([])
  const regex = /<p[^>]*>(.*?)<\/p>/

  useEffect(() => {
      (async () => {
          let { data : articles, error3} = await supabaseClient
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4)
          setnewArticles(articles)
      })()
  },[])
  // http://api.quotable.io/random external api to generate quotes

  useEffect(() => {
    fetch(process?.env?.NEXT_PUBLIC_RANDOM_QUOTE_URL)
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
        }
      )
  },[])

  let fetchNewQuote = () => {
    fetch(process?.env?.NEXT_PUBLIC_RANDOM_QUOTE_URL)
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
        }
      )
  }
  const ImgSrc = (htmlContent) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    const imageElements = doc.querySelectorAll('img')
    const imageUrls = Array.from(imageElements).map(img => img.getAttribute('src'))
    Array.from(parser.parseFromString(htmlContent, 'text/html').querySelectorAll('img')).map(img => img.getAttribute('src'))
    if(imageUrls == null)
        return 0
    else 
        return imageUrls[0]
  }

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
                <h2 className="text-4xl tracking-tight font-extrabold text-darkblue">{quote ?  quote : "If you love life, don't waste time, for time is what life is made up of."}</h2>
                <p className="mt-4 font-light text-gray-700 md:text-lg dark:text-gray-400">{author ? author : "Bruce Lee"}</p>
                <button onClick={fetchNewQuote} className="mt-6 rounded-md bg-blueEce px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Generate New Quote</button>
            </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4 text-center text-white text-shadow-blue">
          <div className="row-start-2 row-span-2 font-bold bg-blueEce rounded-md p-8 hover:bg-darkblue">
            <Link href="/articles">
              Our Articles ➔
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
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#007179" />
                  <stop offset="1" stopColor="#007179" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your Style.<br />Start using our app today.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">On the Mystore site, you can find our selection of fashion items, clothes, shoes, jackets, accessories and current trends.
                Content is updated regularly, so don't hesitate if you're looking to discover new topics! Registration is free and allows you to write your own articles. 
                The entire MyStore team is at your disposal to answer your questions and problems in the contact section.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link href="/articles" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
        <aside aria-label="Related articles" className="py-5 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-darkblue dark:text-white">{newArticles.length===0 ?  '' : 'New :'}</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {newArticles?.map((newArticle) => ( 
                <article className="max-w-xs">
                    <img src={ImgSrc(newArticle?.content) ? ImgSrc(newArticle?.content) : "https://media.istockphoto.com/id/1093663576/fr/vectoriel/look-de-rue-illustration-de-mode-dessin-vectoriel.jpg?s=612x612&w=0&k=20&c=ZcCw5ekTR7bLO4IPy7Xj9DQg24QwmVUf35T4sBJEcjE="} className="mb-5 rounded-lg object-cover" alt="Image 1"/>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-blueEce dark:text-white">
                        <a href={`/articles/${newArticle?.id}`}>{newArticle?.title}</a>
                    </h2>
                    <p className="mb-4 text-darkblue dark:text-gray-400">{newArticle?.content.match(regex)[1].split('.')[0].trim()}</p>
                    <a href={`/articles/${newArticle?.id}`} className="inline-flex items-center font-medium underline underline-offset-4 darkblue dark:text-primary-500 hover:no-underline">
                        Read
                    </a>
                </article>
                ))}
            </div>
            </div>
        </aside>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch("http://api.quotable.io/random")
  const data = await res.json()
  data => {
    setQuote(data.content)
    setAuthor(data.author)
  }
  return { props: { data } }
}