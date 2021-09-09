import React from 'react'
import VCNavBar from './vcnavbar'
import Header from './header'
import Footer from './footer'

// styles
import { pageStyles, paragraphStyles, navStyle } from './vclayout.module.css'

const VCLayout = ({ children, activelink }) => {
  return (
    <main className={pageStyles}>
      <title>{activelink} Page</title>
        <Header></Header>
      <div className={navStyle}>
          <VCNavBar activelink={activelink}></VCNavBar>
      </div>
      <div className={paragraphStyles}>
          { children }
      </div>
      <Footer></Footer>
    </main>
  )
}

export default VCLayout