import * as React from "react";
import Header from './header'
import Footer from './footer'

// styles
import { pageStyles, paragraphStyles } from './vclayout.module.css'

const Layout = ({ children, title }) => {
    return (
    <main className={pageStyles}>
        <title>{ title }</title>
        <Header></Header>
        <div className={paragraphStyles}>
            { children }
         </div>
        <Footer></Footer>
    </main>
    )
}

export default Layout