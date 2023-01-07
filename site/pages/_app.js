import Header from '../components/shared/Header'
import '../styles/globals.css'
import '../styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return <div>
    <Header />
    <Component {...pageProps} />
  </div>
}
