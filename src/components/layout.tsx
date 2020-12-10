import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()},{" "}
          {data.site.siteMetadata.author.map(
            (author: string, i: number, arr: []) =>
              `${author} ${i != arr.length - 1 ? "och " : ""}`
          )}
        </footer>
      </div>
    </>
  )
}

export default Layout
