import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Contacts.module.css'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>MyStore - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center p-8">
        <h1 className="text-3xl wt-title text-darkblue">Contact</h1>
        <form className="mx-auto max-w-md mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-darkblue text-sm font-bold">First name</label>
            <input
              type="text"
              name="firstname"
              className="w-full p-2 border rounded-md text-black focus:border-blueEce"
              placeholder="First name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-darkblue text-sm font-bold">Last name</label>
            <input
              type="text"
              name="lastname"
              className="w-full p-2 border rounded-md text-black"
              placeholder="Last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-darkblue text-sm font-bold">Email</label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border rounded-md text-black"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-darkblue text-sm font-bold">Message</label>
            <textarea
              name="message"
              className="w-full p-2 border rounded-md text-black"
              placeholder="Message"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blueEce text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}