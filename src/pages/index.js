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
        This Portfolio is based around the Space Resources Value Chain.  Select a category of the Space Resources Value Chain above to see Dr. Dreyer’s related work.
      </p>
    </VCLayout>
    </>
  )
}

export default IndexPage
