import React, { useEffect, useState } from "react"
import * as styles from "./index.module.scss"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Layout from "src/components/layout"
import Timeline from "src/components/timeline/Timeline"
import background from "src/images/gray_waves.svg"
import sideimg from "src/images/nlg_med_konturer.svg"

export default function Index() {
  cleanURL()

  const [pageNumber, setPageNumber] = useState(0)
  useEffect(() => {
    document.addEventListener("scroll", adjustPageNumber)
    return () => {
      document.removeEventListener("scroll", adjustPageNumber)
    }
  }, [pageNumber])

  function cleanURL() {
    if (typeof location === `undefined`) return
    const hashtag = location.hash
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
        <img className={styles.background} src={background} />
        <div className={styles.containerHero}>
          <div className={styles.containerLeft}>
            <h1>Näringslivsgruppen</h1>
            <p>
              Vi får ert företag att synas och höras för medietekniker på KTH
            </p>
            <div className={styles.containerLinks}>
              <Link className={"btn " + styles.btn} to="/contact">
                Kontakta oss
              </Link>
              <Link className={"btn " + styles.btnAlt} to="/about">
                Läs mer
              </Link>
            </div>
          </div>
          <img className={styles.sideimg} src={sideimg} />
        </div>
        <div className={styles.containerMedia}>
          <a id="timeline" href="https://www.facebook.com/NLGmedieteknik">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/naringsliv_medieteknik/">
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </div>
      <Timeline />
    </Layout>
  )
}
