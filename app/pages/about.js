import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>WebTech - About us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        About us
      </h1>
      <p><a href="/hello?name=John">test</a></p>
    <p><a href="/hello?name=Elanore">Elanore</a></p>
    <p><a href="/hello?name=Noe">Noé</a></p>
    <p><a href="/hello?name=Solveig">Solveig</a></p>
    <p><a href="/hello?test">Error</a></p>

    </Layout>
  ) 
}
