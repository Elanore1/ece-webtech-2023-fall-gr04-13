
import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({
  children,
  title,
  description
}){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className ="p-0 space-y-12">
        <Header/>
        <main className ="min-h-screen p-16 md:p-16 lg:p-16 bg-whiteSpecial">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}