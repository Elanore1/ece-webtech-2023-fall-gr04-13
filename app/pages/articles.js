import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { supabaseClient } from '../components/supabaseClient.js'
import { useRouter } from 'next/router'

export default function Page(){
  const [datas, setDatas] = useState([])
  const regex = /<p[^>]*>(.*?)<\/p>/
  const router = useRouter()
  const { search } = router.query

   const createSearchString = () => {
    const decodedString =  decodeURIComponent(search)
    const wordsArray = decodedString.split(' ')
    const formattedArray = wordsArray.map(word => `'${word}'`)
    const searchString = formattedArray.join(' | ')
    console.log(searchString)
    return searchString
  };

  useEffect(() => {
    if(search){
      (async () => {
        console.log(createSearchString())
        //use the fts column to search
        const { data : articles, error } = await supabaseClient.from('articles').select().textSearch('fts', `${createSearchString()}`)
        console.log("articles for search :", articles)
        let { data : profiles, error2 } = await supabaseClient.from('profiles').select(`*`)
        console.log(profiles)
        setDatas(bothTable(articles, profiles))
        console.log("DATAS",datas)
      })()

    }else{
      (async () => {
        let { data : articles, error } = await supabaseClient.from('articles').select(`*`).order('created_at', { ascending: true })
        console.log(articles)
        let { data : profiles, error2 } = await supabaseClient.from('profiles').select(`*`)
        console.log(profiles)
        setDatas(bothTable(articles,profiles))
        console.log("DATAS",datas)
      })()
    }
  }, [search])

  const bothTable = (articles, profiles) => {
    const CryptoJS = require("crypto-js")
    const datas = articles.map((article) => {
      const profileAssocie = profiles.find((profile) => profile.id === article.user_id)
        return { ...article, profile: profileAssocie , GravatarUrl: `https://www.gravatar.com/avatar/${CryptoJS.MD5(profileAssocie?.email.toLowerCase()).toString()}?d=mp`}
    })
    console.log("DATASBEFORE",datas)
    return datas
  }

  return (
    <Layout>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className='wt-title text-darkblue'> <span>MyStore</span> Articles </h1>
          <p className="mt-2 text-lg leading-8 text-darkblue">Read the articles written by Internet users! You'll find lots of blogs on different fashion topics below. Don't hesitate to react if you have any questions ;)</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {datas.map((data) => (
            <article className="p-4 rounded-xl flex max-w-xl flex-col items-start justify-between bg-white duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
                <div className="flex items-center gap-x-4 text-xs overflow-hidden">
                    <time datetime={new Date(data?.created_at).toISOString()} className="text-gray-500">
                      {new Date(data?.created_at).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{data?.tag}</a>
                    </div>
                    <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-blueEce">
                        <a href={`/articles/${data?.id}`}>
                        <span className="absolute inset-0"></span>
                            {data?.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-5 text-gray-600 max-w-[100%]">{data?.content?.match(regex) ? data?.content?.match(regex)[1] : ''}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={data?.GravatarUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {data?.profile.username}
                        </a>
                        </p>
                        <p className="text-gray-600">{data?.profile.country}</p>
                    </div>
                </div>
            </article>
            ))}
        </div>
      </div>
    </Layout>
  )
}
