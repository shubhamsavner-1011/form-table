import ResponsiveAppBar from '@/layout/Header'
import Header from '@/layout/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return( 
  <div>
  <ResponsiveAppBar/>
  <Component {...pageProps} />
  </div>
  )
}
