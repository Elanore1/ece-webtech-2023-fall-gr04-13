// pages/404.js
import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/Layout.js';
import styles from '../styles/Layout.module.css'

function Custom404() {
  return (
    <Layout>
      <Head>
          <title>404 - NOT FOUND</title>
          <meta name="description" content="Don't be shy, drop us an email" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.centeredText}>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for does not exist.</p>
        <p><Link href="/">Return to Home</Link></p>
      </div>
    </Layout>
  );
}

export default Custom404;   
