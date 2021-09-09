import * as React from "react"
import VCLayout from '../components/vclayout'

// styles
import { linkSpan, contentStyle } from './vc.module.css'

// markup
const Explore = () => {
  return (
    <VCLayout activelink="Explore">
        <div className={contentStyle}>
            <h2 className={linkSpan}>Explore</h2>
            <p>The Space Resources Value Chain begins with exploration, this involves finding resources and designing tools to find resources.</p>
            <ul>
              <li><a href="https://blog.maxar.com/space-infrastructure/2019/maxar-extends-its-robotic-leadership-to-the-moon?utm_source=maxar.com-robotics-servicing&utm_medium=website" target="_blank" rel="noreferrer noopener">SAMPLR</a></li>
              <li><a href="https://space.mines.edu/curtis-purrington-wins-nasa-nstgro-fellowship-and-challenge-prize/" target="_blank" rel="noreferrer noopener">ELVIS</a></li>
              <li><a href="https://ascelibrary.org/doi/abs/10.1061/9780784483374.041" target="_blank" rel="noreferrer noopener">Sensing while drilling</a></li>
            </ul>
        </div>
    </VCLayout>
  )
}

export default Explore