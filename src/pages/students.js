import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { graphql } from "gatsby"

// styles
import { contentStyle, student } from './vc.module.css'

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "STU"}}}) {
      nodes {
        html
        frontmatter {
          URL
          level
          name
          title
        }
      }
    }
  }
`;

// markup
const StudentsPage = ({ data }) => {
  const students = data.allMarkdownRemark.nodes;
  return (
    <>
    <Layout title="Students">
      <h3>Students Work</h3>

      <ul className={contentStyle}>
      {students.map(node => (
        <li key={node.id}>
        <div classname={student} dangerouslySetInnerHTML={{ __html: node.html  }} />
        </li>
      ))}
      </ul>
     
    </Layout>
    </>
  )
}

export default StudentsPage
