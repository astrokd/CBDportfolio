import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { graphql } from "gatsby"

// styles
import { contentStyle, imgStyles } from './vc.module.css'

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Bio"}}) {
        html
        frontmatter {
          title
          slug
          date
        }
      }
  }`

const MugShot = () => {
  return (
    <StaticImage className={imgStyles} src="../images/christopher-dreyer.jpeg" alt="My Mugshot" />
  ) 
}

// markup
const BioPage = ({ data }) => {
  const html = data.markdownRemark.html
  return (
    <>
    <Layout title="Bio">
      <p className={contentStyle}>
        <MugShot></MugShot>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </p>
    </Layout>
    </>
  )
}

export default BioPage
