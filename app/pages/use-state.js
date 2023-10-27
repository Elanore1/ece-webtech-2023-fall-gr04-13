import React, {useState} from 'react';
import Head from 'next/head'
import Layout from '../components/Layout.js'

function Example(){
    //declare a new state variable, wich we'll call "count"
    const [count,setCount] = useState(0);

    return (
        <Layout>
        <Head>
            <title>MyStore - Use State</title>
            <meta name="description" content="Don't be shy, drop us an email" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className = 'text-center my-6'>
            <h1 className='wt-title text-darkblue'> Use State </h1>
            <button className="bg-blueEce text-white px-4 py-2 rounded-md" onClick={()=>setCount(0)}>
                Reset Count
            </button>
        </div>
        <div className = 'text-center'>
            <p className="text-xl italic font-bold text-darkblue">You clicked {count} times</p>
            <br></br>
            <button className="bg-blueEce text-white px-4 py-2 rounded-md" onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    </Layout>
        
    );
}

export default Example;