import * as React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"

// styles

export const query = graphql`
  query {
    allCbdCitationsCsv {
      nodes {
        Authors
        Title
        Publisher
        Publication
        Pages
        Number
        Year
        Volume
        id
      }
    }
  }
`;

const PubPage = ({ data }) => {
  const pubNodes = data.allCbdCitationsCsv.nodes;

  return (
    <Layout title="Publications">
      <h2>Selected Publications</h2>
      <p>View all publication on <a href="https://scholar.google.com/citations?hl=en&user=KNg4Th0AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer noopener">Google Scholar</a></p>
      <ul>
        {pubNodes.map(node => (
          <li key={node.id}>
            <p>{node.Authors}</p>
            <p>{node.Title}</p>
            <p>Pub:{node.Publication},Pages:{node.Pages},{node.Year},Vol.:{node.Volume}</p>
          </li>
        ))}
      </ul>
        <p>View all publication on <a href="https://scholar.google.com/citations?hl=en&user=KNg4Th0AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer noopener">Google Scholar</a></p>
    </Layout>
  )
}

export default PubPage
