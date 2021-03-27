import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TimelineItem from "./TimelineItem"
import styles from "./timeline.module.scss"
import Masonry from "react-masonry-css"

interface EdgeInterface {
  node: {
    title: string
    publishedDate: string | undefined
    image: {
      title: string
      fluid: {
        src: string
      }
    }
    description: {
      description: string | undefined
    }
  }
}

interface PostDataInterface {
  allContentfulTimelinePost: {
    edges: EdgeInterface[]
  }
}

const Timeline: React.FC = () => {
  const data: PostDataInterface = useStaticQuery(graphql`
    query {
      allContentfulTimelinePost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            image {
              title
              fluid(resizingBehavior: FILL) {
                src
              }
            }
            description {
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
    {data ? 
      <Masonry
        breakpointCols={2}
        className={styles.timeline}
        columnClassName={styles.timelineCol}>
          {data?.allContentfulTimelinePost?.edges.map((edge, index) => {
            return (
                <TimelineItem
                  key={index}
                  title={edge?.node?.title}
                  date={edge?.node?.publishedDate}
                  url={edge?.node?.image?.fluid?.src}
                  alt={edge?.node?.image?.title}
                  description={edge?.node?.description?.description}
                />
            )})
          }
      </Masonry>
      :
      <p>Nothing to show!</p>
      }
      </>
  )}

export default Timeline
