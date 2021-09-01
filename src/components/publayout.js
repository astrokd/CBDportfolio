import * as React from "react";
import Header from './header'
import Footer from './footer'

// styles
import { pageStyles, paragraphStyles } from './vclayout.module.css'

const PubLayout = ({ children }) => {
    return (
    <main className={pageStyles}>
        <title>Publications Page</title>
        <Header></Header>
        <div className={paragraphStyles}>
            { children }
         </div>
        <Footer></Footer>
    </main>
    )
}

export default PubLayout