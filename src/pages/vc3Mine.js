import * as React from "react"
import VCLayout from '../components/vclayout'

// styles
import { linkSpan, contentStyle } from './vc.module.css'

// markup
const Mine = () => {
  return (
    <VCLayout activelink="Mine">
        <div className={contentStyle}>
            <h2 className={linkSpan}>Mine</h2>
            <p> Mining in space can be defined as “Extraction of naturally occurring substances from space for utilitarian purposes.”.</p>
            <ul>
              <li><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KNg4Th0AAAAJ&citation_for_view=KNg4Th0AAAAJ:sbeIDTyQOFgC" target="_blank" rel="noreferrer noopener">Moon</a></li>
              <li><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KNg4Th0AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=KNg4Th0AAAAJ:RfUwGJFMQ-0C" target="_blank" rel="noreferrer noopener">Asteroid Optical Mining - working with TransAstra</a></li>
              <li><a href="https://www.nasa.gov/feature/nasa-awards-500000-in-break-the-ice-lunar-challeng" target="_blank" rel="noreferrer noopener">Break the Ice Challenge - 2nd place team</a></li>
            </ul>
        </div>
    </VCLayout>
  )
}

export default Mine