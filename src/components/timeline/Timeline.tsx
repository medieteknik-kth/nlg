import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TimelineItem from "./TimelineItem"
import styles from "./timeline.module.scss"

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
    <ol className={styles.timeline}>
      {data ? (
        data?.allContentfulTimelinePost?.edges.map((edge, index) => {
          return (
            <li
              key={index}
              style={{ gridRowStart: index + 1, gridRowEnd: index + 3 }}
            >
              <TimelineItem
                title={edge?.node?.title}
                date={edge?.node?.publishedDate}
                url={edge?.node?.image?.fluid?.src}
                alt={edge?.node?.image?.title}
                description={edge?.node?.description?.description}
              />
            </li>
          )
        })
      ) : (
        <p>No items to show</p>
      )}
    </ol>
  )
}

export default Timeline
