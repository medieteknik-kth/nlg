import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TimelineItem from "./TimelineItem"
import { FluidObject } from "gatsby-image"

interface EdgeInterface {
  node: {
    // ???
    frontmatter: {
      image: {
        childImageSharp: {
          fluid: FluidObject | FluidObject[]
        }
      }
      title: React.ReactNode
      date: React.ReactNode
      description?: React.ReactNode
    }
  }
  html: any // ???
  excerpt: any // ???
}

interface PostDataInterface {
  allMarkdownRemark: {
    edges: EdgeInterface[]
  }
}

const Timeline: React.FC = () => {
  const data: PostDataInterface = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MM/DD/YYYY")
              title
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        minHeight: `90vh`,
      }}
    >
      <h1>Timeline</h1>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
        }}
      >
        {data
          ? data?.allMarkdownRemark?.edges.map(edge => {
              return (
                <div>
                  <TimelineItem
                    title={edge?.node?.frontmatter?.title}
                    date={edge?.node?.frontmatter?.date}
                    fluid={
                      edge?.node?.frontmatter?.image?.childImageSharp?.fluid
                    }
                  />
                </div>
              )
            })
          : "No items to show"}
      </div>
    </div>
  )
}

export default Timeline
