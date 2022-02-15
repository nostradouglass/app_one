import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import NavBar from '../components/nav/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar/>
      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp
