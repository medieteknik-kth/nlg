import React from "react"
import styles from './index.module.scss'
import { Link } from "gatsby"
import { FaFacebook, FaInstagram} from 'react-icons/fa'
import Layout from "src/components/layout"
import Timeline from "src/components/timeline/Timeline"

export default function Index() {
  return (
    <Layout page={0} title="Hem">
      <div className={styles.containerMain}>
        <div className={styles.containerHero}>
          <h1>Näringslivsgruppen</h1>
          <p>Lorem ipsum dolor sit amet</p>
          <div className={styles.containerLinks}>
            <Link className={"btn " + styles.btn} to="/contact">Kontakta oss</Link>
            <Link className={"btn " + styles.btnAlt} to="/">Läs mer</Link>
          </div>
        </div>
        <div className={styles.containerMedia}>
          <Link to="https://www.facebook.com/NLGmedieteknik"><FaFacebook className={styles.icon}/></Link>
          <Link to="http://www.instagram.com/nlg_medieteknik"><FaInstagram className={styles.icon}/></Link>
        </div>
      </div>
      <Timeline/>
    </Layout>
  )
}
