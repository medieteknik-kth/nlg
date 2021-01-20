import React from "react"
import Image, { FluidObject } from "gatsby-image"
import styles from "./timeline.module.scss"

interface Props {
  title: React.ReactNode
  date: React.ReactNode
  description?: React.ReactNode
  fluid?: FluidObject
}

const TimelineItem: React.FC<Props> = ({ title, date, fluid }) => {
  return (
    <div className={styles.timelineItem}>
      {fluid && (
        <Image fluid={fluid} className={styles.image} alt="Banner Image" />
      )}
      <h4>{date}</h4>
      <h2>{title}</h2>
    </div>
  )
}

export default TimelineItem
