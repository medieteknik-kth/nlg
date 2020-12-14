import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

interface PostDataInterface {
  frontmatter: {
    title: React.ReactNode
    date: React.ReactNode
  }
  html: any // ?
}

interface Props {
  data: { markdownRemark: PostDataInterface }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const timeline: React.FC<Props> = props => {
  return (
    <Layout>
      <SEO title="Timeline Post" />
      <h1>{props?.data?.markdownRemark?.frontmatter?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props?.data?.markdownRemark?.html }}
      ></div>
    </Layout>
  )
}

export default timeline
