import Header from '../components/shared/Header'
import '../styles/globals.css'
import '../styles/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <div>
    <Head>
      <title> It Codes </title>
      <meta name="description" content="The Best Website Maker of Canada" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </div>
}
