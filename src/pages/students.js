import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

// styles
import { contentStyle } from './vc.module.css'

const Student = ({ children, name, extlink, title }) => {
  return (
    <div className={contentStyle}>
        <h3>{ name }</h3>
        <h5>{ title }</h5>
        <a href={ extlink } target="_blank" rel="noreferrer noopener">{ name }'s homepage</a>
        <p>{ children }</p>
    </div>
  )
}

// markup
const StudentsPage = () => {
  return (
    <>
    <Layout title="Students">
      <h3>Students Work</h3>

      <Student name="Student name" extlink="https://people.mines.edu/" title="student title">
        Acre-breadth angstrom barleycorn candela carat clove dalton decibel em fathom fifth gal grain henry hobbet jiffy kilobase kip minim osmol palm pica pitch rod rutherford svedberg tesla tod tog tun. Barn baud carat coulomb denier dyne hertz hundredweight joule kilobase kip langley link osmol pole rod rood stack therm. Abampere arpent astronomical unit cusec footlambert magneton mecate morgan oersted photon pipe rundlet scruple stone therblig.
      </Student>

      <Student name="Student name" extlink="https://people.mines.edu/" title="student title">
        Barn dalton darcy digit dol face-cord fresnel hundredweight peck quarter quire rutherford wey zolotnik. Ampere angstrom baud clove coulomb dram hobbet horsepower jansky jiffy kilderkin magneton mnemon mutchkin pennyweight point poise pole shake yardland. Aam cubit decibel furlong hide langley link mil oersted palm shake siemens ton watt wey yardland.
      </Student>
     
    </Layout>
    </>
  )
}

export default StudentsPage
