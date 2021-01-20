import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styles from './footer.module.scss'

export default function Footer() {
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
    <footer className={styles.containerMain}>
      <p>
      © {new Date().getFullYear()},{" "}
          {data.site.siteMetadata.author.map(
            (author: string, i: number, arr: []) =>
              `${author} ${i != arr.length - 1 ? "och " : ""}`
          )}
      </p>
    </footer>
  )
}
