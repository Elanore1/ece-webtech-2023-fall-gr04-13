import React, {useState} from 'react';
import Head from 'next/head'
import Layout from '../components/Layout.js'

function LoginNative(){
    const [showUserData, setShowUserData] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        setFormData({
            username: form.get('username'),
            password: form.get('password')
        });
        setShowUserData(true)
    };  

    return (
        <Layout>
        <Head>
            <title>Login Native</title>
            <meta name="description" content="Don't be shy, drop us an email" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-center bg-whiteSpecial">
            { showUserData ? (
                <div className="text-center bg-whiteSpecial">
                    <h1 className="text-3xl wt-title text-darkblue">Personnal Informations :</h1>
                    <p>Hello User : {formData.username}</p>
                    <p>Password : {formData.password}</p>
                </div>
            ):(
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-darkblue dark:text-white">
                        <img className="h-20 w-25" src="/logo.png" alt="logo"/>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-darkblue md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6 " onSubmit={onSubmit}>
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-bold text-darkblue">Your Username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-darkblue sm:text-sm rounded-lg focus:ring-blueEce focus:border-darkblue block w-full p-2.5" placeholder="Username" required/>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-bold text-darkblue">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-darkblue sm:text-sm rounded-lg focus:ring-blueEce focus:border-darkblue block w-full p-2.5" required/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded checked:bg-blueEce focus:ring-3 focus:ring-blue-900"/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blueEce hover:bg-darkblue focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </Layout>  
    );
}

export default LoginNative;