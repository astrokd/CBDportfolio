import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

// styles
import { contentStyle, imgStyles } from './vc.module.css'

const MugShot = () => {
  return (
    <StaticImage className={imgStyles} src="../images/christopher-dreyer.jpeg" alt="My Mugshot" />
  ) 
}

// markup
const BioPage = () => {
  return (
    <>
    <Layout title="Bio">
      <p className={contentStyle}>
      <MugShot></MugShot>
      Dr. Dreyer’s research emphasis is the application of optical diagnostics for the study of challenging environments. Areas of interest include space exploration, combustion science, energy conversion systems, and environmental sensing.
      <br></br>
      <br></br>
      Dr. Dreyer received his BS degree from Drexel University and MS and PhD from the University of Colorado at Boulder. While at CU Boulder his research was the development of Planar Laser Induced Florescence of magnesium oxide during the combustion of magnesium in atmospheres of oxygen and carbon dioxide.
      <br></br>
      <br></br>
      Recent research projects include laser spectroscopy techniques for use in space exploration, laser diagnostics used to measure flame radicals and stable species, and a device for making rock thin sections for NASA.
      </p>
    </Layout>
    </>
  )
}

export default BioPage
