import * as React from "react"
import VCLayout from '../components/vclayout'
import { graphql } from "gatsby"

// styles
import { linkSpan, contentStyle } from './vc.module.css'

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Sell"}}) {
        html
        frontmatter {
          title
          slug
          date
        }
      }
  }`

// markup
const Sell = ({ data }) => {
  const html = data.markdownRemark.html
  return (
    <VCLayout activelink={ data.markdownRemark.frontmatter.title }>
        <div className={contentStyle}>
            <h2 className={linkSpan}>{ data.markdownRemark.frontmatter.title }</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
         </div>
    </VCLayout>
  )
}

export default Sell
