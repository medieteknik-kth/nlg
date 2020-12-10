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
      {fluid && <Image fluid={fluid} alt="Banner Image" />}
      <h2>{title}</h2>
      <h4>{date}</h4>
    </div>
  )
}

export default TimelineItem
