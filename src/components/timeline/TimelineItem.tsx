import React from "react"
import styles from "./timeline.module.scss"

interface Props {
  title: React.ReactNode
  date: React.ReactNode
  description?: React.ReactNode
  url?: string
  alt?: string
}

const TimelineItem: React.FC<Props> = ({
  title,
  date,
  url,
  alt,
  description,
}) => {
  return (
    <div className={styles.timelineItem}>
      {url && (
        <img src={url} className={styles.image} alt={alt || "Banner Image"} />
      )}
      <h4>{date}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TimelineItem
