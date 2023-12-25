import Layout from '../../components/Layout.js'
import React, { useState , useEffect}  from 'react';
import { supabaseClient } from '../../components/supabaseClient'

export default function Page({slug}) {
  const [currentImg, setCurrentImage] = useState(0)
  const [currentSize,setCurrentSize] = useState(0)
  const [article, setArticle] = useState(undefined)

  const handleImageClick = (index) => {
    setCurrentImage(index)
  }
  const handleCurrentClick = (index) => {
    setCurrentSize(index)
  }
  
  /*useEffect(() => {
    (async () => {
      console.log("Fetching article for slug:", slug);
      let { data: article, error } = await supabaseClient
        .from('articles')
        .select(`*`)
        .eq(`slug`, slug);
      setArticle(article[0])
    })()
  }, [slug])*/

  return (
    <Layout>
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                    <address class="flex items-center mb-6 not-italic">
                        <div class="inline-flex items-center mr-3 text-sm text-darkblue dark:text-white">
                            <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                            <div>
                                <a href="#" rel="author" class="text-xl font-bold text-darkblue dark:text-white">Username</a>
                                <p class="text-base text-gray-500 dark:text-gray-400">Country</p>
                                <p class="text-base text-gray-500 dark:text-gray-400">
                                    <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                                </p>
                            </div>
                        </div>
                    </address>
                    <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        Tag
                    </a>
                    <h1 class="mt-6 mb-6 text-3xl font-extrabold leading-tight text-darkblue lg:mb-6 lg:text-4xl dark:text-white">The Art of Casual Fashion: Trends and Inspirations</h1>
                </header>
                <p class="lead text-justify mb-4">The evolution of casual fashion over the years has transformed it into a versatile expression of personal style. From the streetwear revolution to the nuances of minimalist elegance, casual fashion offers a creative playground where every individual can assert their identity. In this article, we dive into current trends in casual fashion, exploring how this form of sartorial expression transcends the boundaries of the everyday. From Streetwear Chic to Minimalist Elegance to the Return of Vintage, each trend tells a unique story in the vast landscape of casual fashion. Our aim is to guide you through these trends, offering practical advice on how to stay stylish while embracing casual comfort. Join us on this journey where casual style becomes an artistic canvas to celebrate the diversity and uniqueness of each individual.</p>
                <figure class="mb-4">
                    <img class="mb-4 rounded" src="https://fabukmagazine.com/wp-content/uploads/2023/03/Casual-Wear-5-Tips-on-How-to-Make-You-Look-Good-and-Comfortable.jpg" alt=""/>
                    <figcaption class="text-sm text-gray-400 text-center">Casual Fashion Evolution</figcaption>
                </figure>

                <h2 class="mb-4 text-3xl font-extrabold leading-tight text-darkblue lg:mb-6 lg:text-4xl dark:text-white ">Trend 1: Streetwear Chic</h2>
                <p class="mb-4 text-justify">Streetwear continues to dominate the casual fashion scene. Opt for oversized hoodies, trendy sneakers and matching jogging pants. Pair with bold accessories such as stylish caps and backpacks.The Streetwear Chic trend has emerged as a major force in the world of casual fashion, offering a bold fusion of comfort and urban aesthetics. This trend pushes the boundaries of casual by incorporating iconic elements such as oversized hoodies, on-trend sneakers and matching jogging pants. Combining casual pieces with bold accessories, such as stylish caps and backpacks, creates a look that's casual, but still incredibly stylish. Streetwear Chic allows everyone to appropriate a piece of the dynamic energy of the streets, transforming casual fashion into a resolutely modern style statement.</p>
                <figure class="mb-4">
                    <img class="mb-4 rounded" src="https://borasification.com/wp-content/uploads/2023/03/look-streetwear-chic-blazer-croise%CC%81-gant-pantalon-velours-borali-2-1440x960.jpeg" alt=""/>
                    <figcaption class="text-sm text-gray-400 text-center">Streetwear Chic</figcaption>
                </figure>
                <h2 class="mb-4 text-3xl font-extrabold leading-tight text-darkblue lg:mb-6 lg:text-4xl dark:text-white">Trend 2: Minimalist elegance</h2>
                <p class="mb-4 text-justify">Simplicity is often synonymous with elegance. Minimalist casual outfits feature clean cuts, neutral colors and quality materials. Lightweight shirts, well-fitting jeans and white sneakers are essential pieces for this style.Minimalist Elegance is establishing itself as an essential trend in the world of casual fashion, highlighting the beauty of simplicity. This trend is characterized by clean cuts, neutral colors and the use of quality materials. Minimalist outfits often consist of lightweight shirts, well-fitted jeans and timeless white sneakers. By adopting this approach, casual fashion enthusiasts can create sophisticated looks without sacrificing comfort. Minimalist Elegance embodies the idea that less is more, offering a timeless aesthetic that transcends fleeting trends.</p>
                <figure class="mb-4">
                    <img class="mb-4 rounded" src="https://assets.vogue.com/photos/64d56d996d2b1f02bbf7b803/master/w_2560%2Cc_limit/00-story%2520(40).jpg" alt=""/>
                    <figcaption class="text-sm text-gray-400 text-center">Minimalist elegance</figcaption>
                </figure>

                <h2 class="mb-4 text-3xl font-extrabold leading-tight text-darkblue lg:mb-6 lg:text-4xl dark:text-white">Trend 3: The Return of Vintage</h2>
                <p class="mb-4 text-justify">Vintage clothing is making a comeback in the world of casual fashion. Explore vintage boutiques for unique pieces. Retro denim jackets, vintage graphic T-shirts and classic sunglasses add a retro touch to your wardrobe.The Return of Vintage is establishing itself as a captivating trend, bringing back elements of the past to redefine contemporary casual fashion. Exploring vintage boutiques, fashion lovers discover unique treasures, from retro denim jackets to graphic t-shirts steeped in history. This trend fuses the iconic styles of decades past with a modern perspective. Wearing vintage pieces thus becomes a way of celebrating authenticity and creating casual outfits imbued with a nostalgic touch. Le Retour du Vintage offers a creative alternative, allowing everyone to appropriate a piece of history while remaining at the cutting edge of contemporary casual fashion.</p>
                <figure class="mb-4">
                    <img class="mb-4 rounded" src="https://cdn.sortiraparis.com/images/80/83043/970883-marche-vintage.jpg" alt=""/>
                    <figcaption class="text-sm text-gray-400 text-center">Return of Vintage</figcaption>
                </figure>
                <div class="flex items-center mb-4 lg:mb-6">
                    <h3 class="text-3xl font-extrabold leading-tight text-darkblue lg:text-4xl dark:text-white mr-2">
                        Style Tips
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0e254a" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <ol class="grid grid-cols-2 gap-4">
                    <div>
                    <li class="mb-4"><strong class="text-blueEce">- Consistent colors</strong>. Match the colors of your outfit to create a more aesthetically pleasing look.
                    </li>
                    <li class="mb-4"><strong class="text-blueEce">- Accessorize wisely</strong>. Accessories, such as watches or bracelets, can transform a casual outfit.</li>
                    <li class="mb-4"><strong class="text-blueEce">- Comfort First</strong>. Make sure your clothes are comfortable yet fashionable.</li>
                    </div>
                </ol>
                <h3 class="mb-4 text-3xl font-extrabold leading-tight text-darkblue lg:mb-6 lg:text-4xl dark:text-white">Conclusion</h3>
                <p class="mb-4 text-justify">At the crossroads of style and comfort, casual fashion positions itself as an infinitely creative canvas where everyone can paint their own visual story. In this article, we explore the contemporary trends that shape this dynamic landscape, discovering how they evolve to reflect the changing nuances of our culture and society. From the dynamism of Streetwear Chic, to the refined simplicity of Minimalist Elegance, to the nostalgic charm of the Return of Vintage, each trend offers a unique perspective on how we choose to present ourselves to the world. Styling casual wear is much more than a simple selection of clothes; it's a statement of intent, a way of sharing our identity with the world around us. Our practical advice is designed to inspire you, encourage you to experiment and embrace your casual style with confidence. For at the heart of casual fashion lies the freedom to express oneself, to celebrate diversity and to claim one's space in the world of sartorial creativity. Don't hesitate to share your thoughts, questions or experiences. Your comments enrich our community and open up stimulating dialogues. May this exploration of casual fashion be a source of inspiration for your own unique style.
                </p>
                <hr class="mb-4"></hr>
                <section class="not-format mb-10">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-lg mb-4 lg:text-3xl font-bold text-darkblue dark:text-white">Discussion (20)</h1>
                    </div>
                    <form class="mb-6">
                        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post comment
                        </button>
                    </form>
                    <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                        class="mr-2 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Michael Gough"/>Michael Gough</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                        title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>
                            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                    </svg>
                                <span class="sr-only">Comment settings</span>
                            </button>
                            <div id="dropdownComment1"
                                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p>Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                            instruments for the UX designers. The knowledge of the design tools are as important as the
                            creation of the design strategy.</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                    </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                        class="mr-2 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="Jese Leos"/>Jese Leos</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-12"
                                        title="February 12th, 2022">Feb. 12, 2022</time></p>
                            </div>
                            <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                    </svg>
                                <span class="sr-only">Comment settings</span>
                            </button>
                            <div id="dropdownComment2"
                                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p>Much appreciated! Glad you liked it ☺️</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                    </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                        class="mr-2 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                        alt="Bonnie Green"/>Bonnie Green</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                                        title="March 12th, 2022">Mar. 12, 2022</time></p>
                            </div>
                            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                    </svg>
                                <span class="sr-only">Comment settings</span>
                            </button>
                            <div id="dropdownComment3"
                                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p>The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                        class="mr-2 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                        alt="Helene Engels"/>Helene Engels</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                                        title="June 23rd, 2022">Jun. 23, 2022</time></p>
                            </div>
                            <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                    </svg>
                            </button>
                            <div id="dropdownComment4"
                                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p>Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                </section>
            </article>
        </div>

        <aside aria-label="Related articles" class="py-8 lg:py-24 dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl">
            <h2 class="mb-8 text-2xl font-bold text-darkblue dark:text-white">Related articles</h2>
            <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                <article class="max-w-xs">
                    <a href="#">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mb-5 rounded-lg" alt="Image 1"/>
                    </a>
                    <h2 class="mb-2 text-xl font-bold leading-tight text-blueEce dark:text-white">
                        <a href="#">Our first office</a>
                    </h2>
                    <p class="mb-4 text-darkblue dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 darkblue dark:text-primary-500 hover:no-underline">
                        Read
                    </a>
                </article>
                <article class="max-w-xs">
                    <a href="#">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" class="mb-5 rounded-lg" alt="Image 2"/>
                    </a>
                    <h2 class="mb-2 text-xl font-bold leading-tight text-blueEce dark:text-white">
                        <a href="#">Enterprise design tips</a>
                    </h2>
                    <p class="mb-4  text-darkblue dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-darkblue dark:text-primary-500 hover:no-underline">
                        Read
                    </a>
                </article>
                <article class="max-w-xs">
                    <a href="#">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" class="mb-5 rounded-lg" alt="Image 3"/>
                    </a>
                    <h2 class="mb-2 text-xl font-bold leading-tight text-blueEce dark:text-white">
                        <a href="#">We partnered with Google</a>
                    </h2>
                    <p class="mb-4  text-darkblue dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-darkblue dark:text-primary-500 hover:no-underline">
                        Read
                    </a>
                </article>
                <article class="max-w-xs">
                    <a href="#">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4"/>
                    </a>
                    <h2 class="mb-2 text-xl font-bold leading-tight text-blueEce dark:text-white">
                        <a href="#">Our first project with React</a>
                    </h2>
                    <p class="mb-4  text-darkblue dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-darkblue dark:text-primary-500 hover:no-underline">
                        Read
                    </a>
                </article>
            </div>
        </div>
        </aside>
    </Layout>
  )
}

/*export async function getServerSideProps(context) {
  return {
    props: {
        slug: context.params.slug
    },
  }
}*/