import * as React from "react"
import VCLayout from '../components/vclayout'

// styles
import { contentStyle } from './vc.module.css'

// markup
const PubPage = () => {
  return (
    <>
    <VCLayout activelink="Pub">
      <h4>Publications</h4>
      <ul>
        <li>C. B. Dreyer, K. Zacny, J. P.H. Steele, J. R. Schwendeman, G. Paulsen, R. C. Andersen, and J. Skok, (2013) “Development of a thin section device for space exploration: Overview and system performance estimates”, Adv. Space Res., 51, 1659–1673.</li>
        <li>C. B. Dreyer, J. R. Schwendeman, J. P.H. Steele, T. E. Carrell, A. Niedringhaus, and J. Skok, (2013) “Development of a thin section device for space exploration: Rock cutting mechanism”, Adv. Space Res., 51, 1674-1691.</li>
        <li>G. Paulsen, K. Zacny, C. B. Dreyer, A. Szucs, M. Szczesiak, C. Santoro, J. Craft, M. Hedlund, and J. Skok, (2013) “Robotic Instrument for Grinding Rocks Into Thin Sections (GRITS)”, Adv. Space Res., 51, 2181-2193.</li>
        <li>Powell, O.A., Papas, P., Dreyer, C.B., (2011) “Flame structure measurements of NO in premixed hydrogen-nitrous oxide flames,” Proceedings of the Combustion Institute, Volume 33, Issue 1, Pages 1053-1062.</li>
        <li>J. R Schwendeman, C. B. Dreyer, and J. P. H. Steele, (2010) “Design Considerations for Development of a Wire-Based Rock Cutting Mechanism for Space Exploration”, J. Mech. Des. 132, 111010.</li>
        <li>Powell, O. A., Papas, P., Dreyer, C. B., (2010) “Hydrogen- and C1–C3 Hydrocarbon-Nitrous Oxide Kinetics in Freely Propagating and Burner-Stabilized Flames, Shock Tubes, and Flow Reactors” Comb. Sci. and Tech. 182.3 252-283.</li>
        <li>O. Powell, P. Papas and C. Dreyer, (2009) “Laminar Burning Velocity of Hydrogen-, Methane- , Propane- and Acetylene-Nitrous Oxide Flames”, Comb. Sci. and Tech., Vol. 181, No. 7, pp. 917–936.</li>
        <li>L. W. Beegle, S. Feldman, P. Johnson, and C. B. Dreyer, (2009) “Chapter 8 Instruments for In-Situ Sample Analysis Drilling”, in Extreme Environments – Penetration and Sampling on Earth and Other Planets. Ed. Y. Bar-Cohen and K. Zacny, WileyVCH, Hoboken, NJ, pages 643-702.</li>
        <li>G. S. Mungas and C. B. Dreyer, (2009) “Cavity Ringdown Spectroscopy in a Hollow Bragg Waveguide: Electromagnetic Theory and Modeling,” Appl. Spectrosc. 63, 1262-1275.</li>
        <li>C. B. Dreyer, G. S. Mungas, P. Thanh, and J. G. Radziszewski, (2007) “Study of Sub-mJ Excited Laser Induced Plasma Combined with Raman Spectroscopy under Mars Atmosphere Simulated Conditions”, Spectrochimica Acta B, Vol. 62 (19).</li>
      </ul>
    </VCLayout>
    </>
  )
}

export default PubPage
