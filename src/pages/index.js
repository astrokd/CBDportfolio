import * as React from "react"
import VCLayout from '../components/vclayout'

// styles
import { contentStyle } from './vc.module.css'

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
    </VCLayout>
    </>
  )
}

export default IndexPage
