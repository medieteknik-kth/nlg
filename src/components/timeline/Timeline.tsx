import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import TimelineItem from "./TimelineItem"
import * as styles from "./timeline.module.scss"
import Masonry from "react-masonry-css"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface EdgeInterface {
  node: {
    title: string
    publishedDate: string | undefined
    body: any
    image: {
      title: string
      gatsbyImageData: IGatsbyImageData
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
            body {
              raw
            }
          }
        }
      }
    }
  `)

  const [colNum, setColNum] = useState(1)

  useEffect(() => {
    updateTimelineCols()
    window.addEventListener("resize", updateTimelineCols)
    return () => {
      window.addEventListener("resize", updateTimelineCols)
    }
  }, [])

  function updateTimelineCols() {
    let width = window.innerWidth
    if (width > 800) {
      setColNum(2)
    } else {
      setColNum(1)
    }
  }

  return (
    <>
      {data ? (
        <Masonry
          breakpointCols={colNum}
          className={styles.timeline}
          columnClassName={styles.timelineCol}
        >
          {data?.allContentfulTimelinePost?.edges.map((edge, index) => {
            return (
              <TimelineItem
                key={index}
                title={edge?.node?.title}
                date={edge?.node?.publishedDate}
                url={edge?.node?.image?.gatsbyImageData}
                alt={edge?.node?.image?.title}
                body={edge?.node?.body?.raw}
              />
            )
          })}
        </Masonry>
      ) : (
        <p>Nothing to show!</p>
      )}
    </>
  )
}

export default Timeline
