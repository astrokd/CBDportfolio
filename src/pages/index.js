import * as React from "react"
import VCLayout from '../components/vclayout'
import ResearchAreas from '../components/researchareas'
import { graphql } from "gatsby"

// styles
import { contentStyle } from './vc.module.css'

  export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Intro"}}) {
        html
        frontmatter {
          title
          slug
          date
        }
      }
  }`

// markup
const IndexPage = ({ data }) => {
  const html = data.markdownRemark.html
  return (
    <>
    <VCLayout activelink="Home">
      <p className={contentStyle}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </p>
      <br></br>
      <ResearchAreas></ResearchAreas>
    </VCLayout>
    </>
  )
}

export default IndexPage
