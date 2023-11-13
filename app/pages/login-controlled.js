import React, {useState} from 'react';
import Head from 'next/head'
import Layout from '../components/Layout.js'

function LoginControlled(){
    const[data,setData] = useState({});
    const [showUserData, setShowUserData] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setShowUserData(true);
    };  

    return (
        <Layout>
        <Head>
            <title>Login Controlled</title>
            <meta name="description" content="Don't be shy, drop us an email" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-center p-8">
            { showUserData ? (
                <div>
                    <h1 className="text-3xl wt-title text-darkblue">Personnal Informations :</h1>
                    <p>Hello User : {data.username}</p>
                    <p>Password : {data.password}</p>
                </div>
            ):(
                <div>
                    <h1 className="text-3xl wt-title text-darkblue">Login Native</h1>
                    <form className="mx-auto max-w-md mt-4 p-4 bg-white rounded-lg shadow-md" onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-darkblue text-sm font-bold">Username</label>
                        <input type="text" name="username" value={data.username} className="w-full p-2 border rounded-md text-black focus:border-blueEce" placeholder="Username" onChange = {(e) => setData({...data, ...{username: e.target.value}})} required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-darkblue text-sm font-bold">Password</label>
                        <input type="password" name="password" value={data.password}  className="w-full p-2 border rounded-md text-black" placeholder="Password" onChange = {(e) => setData({...data, ...{password: e.target.value}})} required/>
                    </div>
                    <div>
                        <button type="submit" className="bg-blueEce text-white px-4 py-2 rounded-md">
                            Login
                        </button>
                    </div>
                    </form>
                </div>
            )}
        </div>
    </Layout>  
    );
}

export default LoginControlled;