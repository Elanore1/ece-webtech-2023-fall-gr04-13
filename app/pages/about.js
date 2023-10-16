import Head from 'next/head'
import Layout from '../components/Layout.js'
import Link from 'next/link';
import styles from '../styles/Layout.module.css'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>MyStore - About us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.centeredText}>
        <h1> About us </h1>
        <p><a href="/hello?name=John">Testing with a general name</a></p>
        <p><a href="/hello?name=Elanore">Elanore</a></p>
        <p><a href="/hello?name=Noe">Noé</a></p>
        <p><a href="/hello?name=Solveig">Solveig</a></p>
        <p><a href="/hello?test">Error - No Name Provided</a></p>
      </div>
    </Layout>
  ) 
}
