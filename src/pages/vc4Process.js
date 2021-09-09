import * as React from "react"
import VCLayout from '../components/vclayout'

// styles
import { linkSpan, contentStyle } from './vc.module.css'

// markup
const Process = () => {
  return (
    <VCLayout activelink="Process">
        <div className={contentStyle}>
            <h2 className={linkSpan}>Process</h2>
            <p> Process in the Space Resources Value Chain is the production of goods in space using space resources.  This can include parts, spacecraft, fuel, structures, roads, human consumables, and more. Remember that space resources are more than just material resources. Microgravity, vacuum, photons, for example, are also resources that might be used for manufacturing.</p>
            <ul>
              <li><a href="https://space.mines.edu/prof-greg-jackson-to-collaborate-on-nasa-project-with-oxeon-energy/" target="_blank" rel="noreferrer noopener">Tipping Point</a></li>
              <li><a href="https://space.mines.edu/mines-senior-design-team-selected-as-finalist-for-nasa-3d-printed-habitat-challenge/" target="_blank" rel="noreferrer noopener">NASA 3D Printed Habitat Challenge</a></li>
            </ul>
        </div>
    </VCLayout>
  )
}

export default Process