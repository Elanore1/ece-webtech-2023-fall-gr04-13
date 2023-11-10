import Layout from '../../components/Layout.js'
import React, { useState }  from 'react';

export default function Page({
  article
}){
  const [currentImg, setCurrentImage] = useState(0)
  const [currentSize,setCurrentSize] = useState(0)

  const handleImageClick = (index) => {
    setCurrentImage(index)
  }
  const handleCurrentClick = (index) => {
    setCurrentSize(index)
  }
  return (
    <Layout title={article.title}>
      <div className="py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="grid grid-cols-5 grid-flow-col gap-4">
                    <div className="row-span-4 col-span-4">
                        <img className="h-auto max-w-full rounded-lg" src={article.urlArticle[currentImg]} alt={`Image ${currentImg+1}`}/>
                    </div>
                    <div>
                        {article.urlArticle.map((url, index) => (
                          <div key={index}  onClick={() => handleImageClick(index)} className={`col-span-${index+1} row-span-2 gap-4  hover:rounded-lg hover:border-2 hover:border-darkblue`}>
                            <img src={url} className="h-auto max-w-full rounded-lg" alt={`Image ${index+1}`}/>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-darkblue mb-2">{article.title}</h2>
                  <p className="text-darkblue text-sm mb-4">
                    {article.hook}
                  </p>
                  <div className="flex mb-4">
                      <div className="mr-4">
                          <span className="font-bold text-darkblue">Price:</span>
                          <span className="text-darkblue ">{article.price}</span>
                      </div>
                      <div>
                          <span className="font-bold text-darkblue">Availability:</span>
                          <span className="text-darkblue">{article.availability}</span>
                      </div>
                  </div>
                  <div className="mb-4">
                      <span className="font-bold text-darkblue">Select Color:</span>
                      <div className="flex items-center mt-2">
                        {article.color.map((color, index)=>(
                          <button onClick={() => handleImageClick(index)} className={`w-6 h-6 rounded-full mr-2  ${index === currentImg ? 'border-2 border-blueEce' : 'border-2 border-darkblue'} bg-${color}`} style={{ backgroundColor: color }}></button>
                        ))}
                      </div>
                  </div>
                  <div className="mb-4">
                      <span className="font-bold text-darkblue">Select Size:</span>
                      <div className="flex items-center mt-2">
                        {article.size.map((size, index)=>(
                            <button onClick={() => handleCurrentClick(index)} className={`py-2 px-4 rounded-full font-bold mr-2 ${index === currentSize ? 'bg-blueEce text-white' : 'bg-gray-300 text-darkblue hover:bg-gray-400'}`}>{`${size}`}</button>
                        ))}
                      </div>
                  </div>
                  <div>
                    <span className="font-bold text-darkblue">Product Description:</span>
                    <div>
                      {article.description.map((item,index)=>{
                        const lastChar = item.slice(-1);
                        return(
                          <div>
                          { lastChar === ':' ? (
                            <p key={index} className="text-darkblue mt-2 font-bold"> {item}</p>
                          ):(
                            <p key={index} className="text-darkblue text-sm mt-2"> {item}</p>
                          )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <br></br>
                  <div className="flex -mx-2 mb-4">
                      <div className="w-1/2 px-2">
                          <button className="w-full bg-blueEce text-white py-2 px-4 rounded-full font-bold hover:bg-darkblue">Add to Cart</button>
                      </div>
                      <div className="w-1/2 px-2">
                          <button className="w-full bg-gray-200 text-darkblue py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const response = await fetch(`http://localhost:3000/api/articles/${ctx.params.slug}`)
  const article = await response.json()
  return {
    props: {
      article: article
    }
  };
}

export async function getStaticPaths(ctx) {
  const response = await fetch(`http://localhost:3000/api/articles`)
  const articles = await response.json()
  return {
    paths: articles.map( article => `/articles/${article.slug}`),
    fallback: false
  };
}
