import React from 'react'
import VCNavBar from './vcnavbar'
import Header from './header'
import Footer from './footer'

// styles
import { pageStyles, paragraphStyles, navStyle } from './vclayout.module.css'

const ResearchAreas = () => {
  return (
    <div className={paragraphStyles}>
        <h3>RESEARCH AREAS</h3>
          <ul>
            <li>Laser Induced Breakdown Spectroscopy for material analysis</li>
            <li>Raman spectroscopy for combustion analysis</li>
            <li>Maritime atmospheric characterization using laser scattering</li>
            <li>Spectroscopy of Ionic Liquids</li>
            <li>Surface probe for asteroid characterization</li>
            <li>Hollow Waveguide Cavity Ringdown Spectroscopy</li>
            <li>In Situ Automated Rock Thin Section Instrument for Planetary Science</li>
          </ul>
      </div>
  )
}

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
      <ResearchAreas></ResearchAreas>
      <Footer></Footer>
    </main>
  )
}

export default VCLayout