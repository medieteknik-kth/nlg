import React from "react"
import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "./timeline.module.scss"

interface Props {
  title: React.ReactNode
  date: React.ReactNode
  body?: React.ReactNode
  url?: string
  alt?: string
}

const TimelineItem: React.FC<Props> = ({ title, date, url, alt, body }) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} className={styles.styledLink}>
          {children}
        </a>
      ),
    },
  }

  return (
    <div className={styles.timelineItem}>
      {url && (
        <img src={url} className={styles.image} alt={alt || "Banner Image"} />
      )}
      <h4>{date}</h4>
      <h2>{title}</h2>
      {body && documentToReactComponents(JSON.parse(body), options)}
    </div>
  )
}

export default TimelineItem
