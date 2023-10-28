import '@/styles/globals.css'
import { UserProvider } from '@/components/UserContext'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
