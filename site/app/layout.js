import Header from '../components/shared/Header'
import '../styles/globals.css'
import '../styles/tailwind.css'

const Layout = ({ children }) => {
    return <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <Header />
            {children}
        </body>
    </html>

}

export default Layout
