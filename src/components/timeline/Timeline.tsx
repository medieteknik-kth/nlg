import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import TimelineItem from "./TimelineItem"
import { FluidObject } from "gatsby-image"
import styles from "./timeline.module.scss"

interface EdgeInterface {
  node: {
    // ???
    frontmatter: {
      image: {
        childImageSharp: {
          fluid: FluidObject | undefined
        }
      }
      title: React.ReactNode
      date: React.ReactNode
      description?: React.ReactNode
    }
    fields: {
      slug: string
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ol className={styles.timeline}>
      {data
        ? data?.allMarkdownRemark?.edges.map((edge, index) => {
            return (
              <li key={index} style={{gridRowStart: index+1, gridRowEnd: index+3}}>
                  <TimelineItem
                    title={edge?.node?.frontmatter?.title}
                    date={edge?.node?.frontmatter?.date}
                    fluid={
                      edge?.node?.frontmatter?.image?.childImageSharp?.fluid
                    }
                  />
              </li>
            )
          })
        : 
        <p>No items to show</p>
        }
    </ol>
  )
}

export default Timeline
