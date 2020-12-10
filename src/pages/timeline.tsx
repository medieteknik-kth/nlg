import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline/Timeline"

const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO title="Timeline" />
      <h1>Timeline</h1>
      <Timeline />
    </Layout>
  )
}

export default Contact
