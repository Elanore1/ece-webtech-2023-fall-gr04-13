import Layout from '../../components/Layout.js'
import React, { useState , useEffect}  from 'react';
import { supabaseClient } from '../../components/supabaseClient.js'
import { useRouter } from 'next/router'
    

export default function Page({id}) {
    const [data, setDatas] = useState([])
    const [comments, setComments] = useState([])
    const [relatedContent, setRelatedContent] = useState([])
    const CryptoJS = require("crypto-js")
    const regex = /<p[^>]*>(.*?)<\/p>/

    const [formData, setFormData] = useState({
        content : '',
        article_id: '',
        user_id : '',
        good_mark: '',
        bad_mark : ''
    })
    const router = useRouter()
    useEffect(() => {
        (async () => {
            let { data : article, error } = await supabaseClient.from('articles').select(`*`).eq(`id`, id)
            console.log(article[0])
            let { data : comments, error1 } = await supabaseClient.from('comments').select(`*`).eq(`article_id`, id)
            console.log(comments)
            let { data : profiles, error2} = await supabaseClient.from('profiles').select(`*`)
            console.log(profiles)
            let { data : relatives, error3} = await supabaseClient.from('articles').select(`*`).eq(`tag`,article[0].tag).not(`id`, 'eq', id).limit(4)
            console.log(relatives)
            setRelatedContent(relatives)
            const datas = bothTable(article[0],profiles)
            const comment = commentTable( comments,profiles)
            console.log("DATAS",datas)
            console.log("COMMENT",comment)
            setDatas(datas)
            setComments(comment)
          })()
    }, [id])

    const bothTable = (article, profiles) => {
        const profileAssocie = profiles.find((profile) => profile.id === article.user_id)
            return { ...article, profile: profileAssocie}
    }
    const commentTable = (comments, profiles) => {
        const commentsWithProfiles = comments.map((comment)=>{
            const profileAssocie = profiles.find((profile) => profile.id === comment.user_id)
                        return { ...comment, profile: profileAssocie, isGood: false, isBad: false}
        })
        return commentsWithProfiles
    }
    //Comment handle
    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(formData) 
        setFormData({
            ...formData,
            [name]: value,
    })}
    
    const PostComment = async (e) => {
        e.preventDefault()
        console.log(formData)
        if(formData.content.length!=0){
            const {comments, error} = await supabaseClient
            .from('comments')
            .insert([{
                content: formData.content,
                article_id: data?.id,
                user_id: data?.profile?.id,
                good_mark: 0,
                bad_mark: 0
            },])
            .select()
            if(error){
                console.log(error)
            }
            formData.content = ""
            router.push(`/articles/${data?.id}`)
        }else{
            console.log("Pas de contenu")
        }
    }

    const ImgSrc = (htmlContent) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlContent, 'text/html')
        console.log("htmlcontent",htmlContent)
        const imageElements = doc.querySelectorAll('img')
        console.log("imgeleme",imageElements)
        const imageUrls = Array.from(imageElements).map(img => img.getAttribute('src'))
        Array.from(parser.parseFromString(htmlContent, 'text/html').querySelectorAll('img')).map(img => img.getAttribute('src'))
        console.log("urlimg",imageUrls)
        if(imageUrls == null)
            return 0
        else 
            return imageUrls[0]
    }

    const handleMark  = async (comment, markType) => {
        console.log(comment)
        if(markType === 'bad_mark'){
            comment.isBad = true
            comment.bad_mark += 1
            setComments((prevComments) =>
                prevComments.map((c) =>
                c.id === comment.id ? { ...c, bad_mark: comment.bad_mark} : c
            ))
            if(comment.isGood == true){
                comment.good_mark -=1
                setComments((prevComments) =>
                    prevComments.map((c) =>
                    c.id === comment.id ? { ...c, good_mark: comment.good_mark} : c
                ))
            }
            comment.isGood = false
        }else if(markType ==='good_mark'){
            comment.isGood = true
            comment.good_mark +=1
            setComments((prevComments) =>
                prevComments.map((c) =>
                c.id === comment.id ? { ...c, good_mark: comment.good_mark} : c
            ))
            if(comment.isBad == true){ 
                comment.bad_mark -=1
                setComments((prevComments) =>
                prevComments.map((c) =>
                c.id === comment.id ? { ...c, bad_mark: comment.bad_mark} : c
                ))
            }
            comment.isBad = false
        }

        if(comment.isGood){
            const { comments, error } = await supabaseClient
            .from('comments')
            .update({
                [markType] : comment.good_mark,
            })
            .eq('id', comment.id)
        }else if(comment.isBad){
            const { comments, error } = await supabaseClient
            .from('comments')
            .update({
                [markType] : comment.bad_mark,
            })
            .eq('id', comment.id)
        }
    }

    return (
    <Layout>
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-darkblue dark:text-white">
                            <img className="mr-4 w-16 h-16 rounded-full" src={`https://www.gravatar.com/avatar/${CryptoJS.MD5(data?.profile?.email?.toLowerCase()).toString()}?d=mp`} alt="Jese Leos"/>
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold text-darkblue dark:text-white">{data?.profile?.username}</a>
                                <p className="text-base text-gray-500 dark:text-gray-400">{data?.profile?.country}</p>
                                <p className="text-base text-gray-500 dark:text-gray-400">
                                    <time title="February 8th, 2022">{Date(data?.create_at).toString().slice(0, 15)}</time>
                                </p>
                            </div>
                        </div>
                    </address>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {data?.tag}
                    </a>
                    <h1 className="mt-6 mb-6 text-3xl font-extrabold leading-tight text-darkblue lg:mb-6 lg:text-4xl dark:text-white">{data?.title}</h1>
                </header>
                <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                <hr className="mb-4"></hr>
                <section className="not-format mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-lg mb-4 lg:text-3xl font-bold text-darkblue dark:text-white">Discussion (20)</h1>
                    </div>
                    <form onSubmit={PostComment} className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="content" className="sr-only">Your comment</label>
                            <textarea onChange={handleInputChange} id="content" name="content" rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required>
                            </textarea>
                        </div>
                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-base font-bold text-center text-white bg-darkblue rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post comment
                        </button>
                    </form>
                    {comments?.map((comment) => ( 
                        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                    <img className="mr-2 w-6 h-6 rounded-full" src={`https://www.gravatar.com/avatar/${CryptoJS.MD5(comment?.profile?.email?.toLowerCase()).toString()}?d=mp`} alt="Michael Gough"/>
                                    {comment?.profile?.username}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(comment?.created_at).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' ,hour: 'numeric', minute: 'numeric'})}</p>
                            </div>

                            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                        </footer>
                        <p>{comment?.content}</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <button key={comment?.id+'good_mark'} onClick={() => handleMark(comment, 'good_mark')} type="button" className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={comment?.isGood ? "#007179" : "currentColor"} className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                </svg>
                                <p className="mx-0.5">{comment?.good_mark}</p>
                            </button>
                            <button key={comment?.id+'bad_mark'} onClick={() => handleMark(comment, 'bad_mark')} type="button" className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={comment?.isBad ? "#007179" : "currentColor"} className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                </svg>
                                <p className="mx-0.5">{comment?.bad_mark}</p>
                            </button>
                        </div>
                    </article>
                    ))}
                </section>
            </article>
        </div>
        <aside aria-label="Related articles" className="py-8 lg:py-24 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-darkblue dark:text-white">Related articles</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {relatedContent?.map((RelatedArticle) => ( 
                <article className="max-w-xs">
                    <img src={ImgSrc(RelatedArticle?.content) ? ImgSrc(RelatedArticle?.content) : "https://media.istockphoto.com/id/1093663576/fr/vectoriel/look-de-rue-illustration-de-mode-dessin-vectoriel.jpg?s=612x612&w=0&k=20&c=ZcCw5ekTR7bLO4IPy7Xj9DQg24QwmVUf35T4sBJEcjE="} className="mb-5 rounded-lg" alt="Image 1"/>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-blueEce dark:text-white">
                        <a href={`/articles/${RelatedArticle?.id}`}>{RelatedArticle?.title}</a>
                    </h2>
                    <p className="mb-4 text-darkblue dark:text-gray-400">{RelatedArticle?.content.match(regex)[1].split('.')[0].trim()}</p>
                    <a href={`/articles/${RelatedArticle?.id}`} className="inline-flex items-center font-medium underline underline-offset-4 darkblue dark:text-primary-500 hover:no-underline">
                        Read
                    </a>
                </article>
                ))}
            </div>
            </div>
        </aside>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
        id: context.params.id
    },
  }
}