import * as React from "react"
import VCLayout from '../components/vclayout'
import { graphql } from "gatsby"

// styles
import { contentStyle, paragraphStyles } from './vc.module.css'

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
      }
    }
  }
  }`

  

const ResearchAreas = ({ children }) => {
  // const htmlli = data.allMarkdownRemark.nodes
  return (
    <div className={paragraphStyles}>
        <h3>RESEARCH AREAS</h3>
          <ul>
            { children }
          </ul>
      </div>
  )
}

// markup
const IndexPage = ({ data }) => {
  const html = data.allMarkdownRemark.nodes[0].html
  const htmlli = data.allMarkdownRemark.nodes[1].html
  return (
    <>
    <VCLayout activelink="Home">
      <p className={contentStyle}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </p>
      <br></br>
      <ResearchAreas><div dangerouslySetInnerHTML={{ __html: htmlli }} /></ResearchAreas>
    </VCLayout>
    </>
  )
}

export default IndexPage
