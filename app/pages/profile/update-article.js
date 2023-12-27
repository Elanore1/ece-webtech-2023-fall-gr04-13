import { useState, useRef,useEffect } from 'react'
import { supabaseClient } from '../../components/supabaseClient.js'
import Layout from '../../components/Layout.js'
import {useUser} from '../../components/UserContext.js'
import { Editor } from '@tinymce/tinymce-react'
import { useRouter } from 'next/router'

export default function updateArticle(){
    const {user} = useUser()
    const [articleContent, setArticleContent] = useState('')
    const [articleToUpdate,setArticleToUpdate] = useState('')
    const editorRef = useRef(null)
    const router = useRouter()
    const articleId = router.query.id
    
    const handleEditorChange = () => {
        if (editorRef.current) {
            setArticleContent(editorRef.current.getContent())
        }
    }
    const CancelArticle = (e) => {
        router.push('/profile/articles')
    }

    const [formData, setFormData] = useState({
        title : '',
        tag : '',
        categories : ''
    })
    //form handle
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setArticleToUpdate((prevArticle) => ({
          ...prevArticle,
          [name]: value,
        }))
      }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(articleContent){
            const {data, error} = await supabaseClient
            .from('articles')
            .update( {
                title: articleToUpdate?.title,
                tag: articleToUpdate?.tag,
                categories: articleToUpdate?.categories,
                content: articleContent
            }).eq(`id`, articleId)
            if(error){
                console.log(error)
            }
            router.push('/profile/articles')
        }else{
            console.log("Pas de contenu")
        }
    }

    useEffect(() => {
        if(articleId){
            async function fetchArticle(){
                let { data, error} = await supabaseClient.from('articles')
                .select('*')
                .eq('id',articleId)
                setArticleToUpdate(data[0])
            }
            fetchArticle()
            setFormData({
                title : articleToUpdate?.title,
                tag : articleToUpdate?.tag,
                categories : articleToUpdate?.categories
            })
        }
    }, [articleId])

    return (
        <Layout title="Signed Up" description="Generated by create next app">
        <h1 className='wt-title text-darkblue text-center'>
            <span>Update</span> your Article
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="mb-8 border-b border-gray-900/10 pb-12">
                    <div className="mb-8 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="firstname" className="block text-xl font-bold leading-6 text-blueEce">
                                Title
                            </label>
                            <div className="mt-2">
                                <input onChange={handleInputChange}  value={articleToUpdate?.title} placeholder="Title" type="text" name="title" id="title" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-xl font-bold leading-6 text-blueEce">
                                Tag
                            </label>
                            <div className="mt-2">
                                <select onChange={handleInputChange} value={articleToUpdate?.tag} id="tag" name="tag" autoComplete="tag-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" required>
                                    <option>Mode</option>
                                    <option>Trend</option>
                                    <option>Parade</option>
                                    <option>Advice</option>
                                    <option>Pants</option>
                                    <option>T-shirt</option>
                                    <option>Sweater</option>
                                    <option>Accessories</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="firstname" className="block text-xl font-bold leading-6 text-blueEce">
                                Categories
                            </label>
                            <div className="mt-2">
                                <input onChange={handleInputChange} value={articleToUpdate?.categories} placeholder="categories" type="text" name="categories" id="categories" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    </div>
                    <Editor
                        apiKey='no-api-key'
                        onInit={(evt, editor) => editorRef.current = editor}
                        name="content" id="content"
                        initialValue={articleToUpdate?.content}
                        init={{
                        height: 800,
                        menubar: false,
                        plugins: [
                        'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                        'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                        'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount','textcolor'
                        ],
                        toolbar: 'undo redo | casechange blocks | bold italic forecolor backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onChange={handleEditorChange}
                    />
                </div> 
            </div> 
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type='button' onClick={CancelArticle} className="rounded-md bg-blueEce px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkblue">Cancel</button>
                <button type="submit" className="rounded-md bg-blueEce px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkblue">Save</button>
            </div>
        </form>
        </Layout>
    )
}