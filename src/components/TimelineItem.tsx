import React from "react"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  title: React.ReactNode
  date: React.ReactNode
  description?: React.ReactNode
  fluid?: FluidObject
}

const TimelineItem: React.FC<Props> = ({ title, date, fluid }) => {
  return (
    <div
      style={{
        backgroundColor: `#fff`,
        width: `40vw`,
        margin: `5px`,
      }}
    >
      {fluid && <Image fluid={fluid} alt="Banner Image" />}
      <h2>{title}</h2>
      <h4>{date}</h4>
    </div>
  )
}

export default TimelineItem
