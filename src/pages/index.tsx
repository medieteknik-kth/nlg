import React, { useEffect, useState } from "react"
import styles from './index.module.scss'
import { Link } from "gatsby"
import { FaFacebook, FaInstagram} from 'react-icons/fa'
import Layout from "src/components/layout"
import Timeline from "src/components/timeline/Timeline"

export default function Index() {
  cleanURL()

  const [pageNumber, setPageNumber] = useState(0)
  useEffect(() => {
    document.addEventListener("scroll", adjustPageNumber);
    return () => {
      document.removeEventListener("scroll", adjustPageNumber)
    }
  }, [pageNumber])

  function cleanURL() {
    const hashtag = window.location.hash
    if (hashtag) {
      const currentURL = window.location.href
      const newURL = currentURL.split("#")[0]
      window.history.replaceState("", "Lunch", newURL)
    }
  }

  function adjustPageNumber() {
    let scrolled = document.scrollingElement?.scrollTop
    if (scrolled != null) scrolled > 512 ? setPageNumber(1) : setPageNumber(0)
  }

  return (
    <Layout page={pageNumber} title="Hem">
      <div className={styles.containerMain} id="home">
        <div className={styles.containerHero}>
          <h1>Näringslivsgruppen</h1>
          <p>Lorem ipsum dolor sit amet</p>
          <div className={styles.containerLinks}>
            <Link className={"btn " + styles.btn} to="/contact">Kontakta oss</Link>
            <Link className={"btn " + styles.btnAlt} to="/">Läs mer</Link>
          </div>
        </div>
        <div className={styles.containerMedia}>
          <a id="timeline" href="https://www.facebook.com/NLGmedieteknik"><FaFacebook className={styles.icon}/></a>
          <a href="http://www.instagram.com/nlg_medieteknik"><FaInstagram className={styles.icon}/></a>
        </div>
      </div>
      <Timeline/>
    </Layout>
  )
}
