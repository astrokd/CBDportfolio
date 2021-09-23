import * as React from "react"
import VCLayout from '../components/vclayout'
// import { graphql } from "gatsby"

// styles
import { contentStyle, paragraphStyles } from './vc.module.css'

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

// markup
const IndexPage = () => {
  return (
    <>
    <VCLayout activelink="Home">
      <p className={contentStyle}>
        This Portfolio is based around the Space Resources Value Chain.
        <br></br> 
        <br></br> 
        Value chains are used by business and industries to explain what they do. Here are ways to write the value chains for the terrestrial mining industry and the terrestrial manufacturing industry.  
        <br></br>
        <br></br>
        The Space Resources Value Chain begins with Explore(EX), followed by Establish Feasibility(EF), Mine(MN), Process(PC), Manufacture(MF), Distribution(DS), Sell(SL).
        Select a category of the Space Resources Value Chain above to see Dr. Dreyer’s related work.
      </p>
      <br></br>
      <ResearchAreas></ResearchAreas>
    </VCLayout>
    </>
  )
}

export default IndexPage
