import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout.js'
import { supabaseClient } from '../../components/supabaseClient'
import {useUser} from '../../components/UserContext.js'
export default function Page(){
    const {user} = useUser()
    const [gravatarUrl, setGravatarUrl] = useState(null)
    const [articles, setArticles] = useState([])
    const [profile, setProfile] = useState(null)
    const regex = /<p[^>]*>(.*?)<\/p>/

    useEffect(() => {
        if(user){
            (async () => {
                let { data : articles, error } = await supabaseClient.from('articles').select(`*`).eq(`user_id`, user?.id).order('created_at', { ascending: false })
                setArticles(articles)
            })()
            async function fetchData(){
                let { data, error} = await supabaseClient.from('profiles')
                .select('*')
                .eq('id',user?.id)
                setProfile(data[0])
            }
            fetchData()
            //Gravatar URL
            const CryptoJS = require("crypto-js")
            const lowercaseEmail = user?.email.toLowerCase()
            const md5Hash = CryptoJS.MD5(lowercaseEmail).toString()
            setGravatarUrl(`https://www.gravatar.com/avatar/${md5Hash}?d=mp`)
        }
    }, [])

    return (
    <Layout>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className='wt-title text-darkblue'> <span>Your</span> Articles </h1>
          <p className="mt-2 text-lg leading-8 text-darkblue">Find the articles you have written, you can modify and delete them. Don't hesitate to post a new article if you want to talk about a particular subject!</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles.map((article) => (
            <article className="p-4 rounded-xl flex max-w-xl flex-col items-start justify-between bg-white duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
                    <div className="flex items-center gap-x-4 text-xs overflow-hidden">
                        <time datetime="2020-03-16 gap-x-4" className="text-gray-500">{Date(article.create_at).toString().slice(0, 15)}</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{article.tag}</a>
                    </div>
                    <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-blueEce">
                        <a href={`/articles/${article.id}`}>
                        <span className="absolute inset-0"></span>
                            {article.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-5 text-gray-600 max-w-[100%]">{article.content.match(regex)[1]}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img src={gravatarUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                {profile?.username}
                            </a>
                            </p>
                            <p className="text-gray-600">{profile?.country}</p>
                        </div>
                    </div>
                </article>
            ))}
            <div className="relative mt-8 flex flex-col items-center duration-500 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0e254a" className="w-20 h-20 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <a href={`/profile/newarticle`}><p className="text-gray-700">Add an Article</p></a>
            </div>
        </div>
      </div>
    </Layout>
    )
}