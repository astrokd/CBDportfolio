import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

// styles
import { paragraphStyles } from '../pages/vc.module.css'

const ResearchAreas = ({ data }) => {
    return (
        <StaticQuery
            query={graphql`
            query Research {
                markdownRemark(frontmatter: {slug: {eq: "/research"}}) {
                    html
                    frontmatter {
                        title
                        slug
                        date
                    }
                }
            }
        `}
      render={data => (
        <div className={paragraphStyles}>
          <h3>RESEARCH AREAS</h3>
            <ul>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </ul>
        </div>
      )}
    />
    )
  }

export default ResearchAreas
