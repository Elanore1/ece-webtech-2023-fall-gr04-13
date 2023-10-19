import Header from './Header.js'
import Footer from '../components/Footer.js'
//container div 
//main style main
export default function Layout({children}){
  return (
    <div className="p-0">
      <Header/>
      <main className="min-h-screen p-16 md:p-16 lg:p-16 bg-whiteSpecial">
        {children}
      </main>
      <Footer />
    </div>
  )
}