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
      Dr. Chris Dreyer has a BS in Mechanical Engineering from Drexel University and an MS and PhD in Mechanical Engineering from the University of Colorado at Boulder. He joined Colorado School of Mines in 2000 as a Research Professor with research focus on instrumentation for energy systems and later instrumentation for space exploration. His research focus now includes the full space resources value chain from resource identification to production of products.
      </p>
      <p className={contentStyle}>
      Dr. Dreyer is currently a Professor of Practice in the <a href="https://space.mines.edu/" target="_blank" rel="noreferrer noopener">Space Resources Graduate Program</a>. He has two decades of experience in technology development and extensive experience with experimental methods, regolith mechanics, instrument design, and optical/laser spectroscopy methods. Dr. Dreyer’s interests include the development of space resources and advancement of space exploration of asteroids, the Moon, and Mars. He has developed experimental facilities for resource technology development, including prospecting instruments, resource extraction, surface property measurement, and resource processing. Dr. Dreyer is the Director of Engineering in the <a href="https://space.mines.edu/research" target="_blank" rel="noreferrer noopener">Center for Space Resources</a> at Mines, in which he guides the experimental research direction of the center. He is a co-founder of Mines’ Space Resources Graduate Program, the first program in the world dedicated to space resources.
      </p>
    </Layout>
    </>
  )
}

export default BioPage
