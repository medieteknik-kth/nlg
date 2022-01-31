import React from 'react'
import * as styles from './footer.module.scss'
import logo from "src/images/nlg-icon.png"
import { Link } from 'gatsby'

export default function Footer() {
 
  return (
    <footer>
      <div className={styles.containerMain}>
        <div className={styles.column + " " + styles.columnLogo}>
          <img className={styles.logo} src={logo}/>
        </div>
        <div className={styles.column}>
          <div className={styles.contact}>
            <h3>Kontakt</h3>
            <a href="mailto: naringsliv@medieteknik.com">naringsliv@medieteknik.com</a>
          </div>
          <div>
            <p>Fack vid THS</p>
            <p>Drottning Kristinas Väg 15</p>
            <p>100 44 Stockholm</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.split}>
            <div className={styles.links}>
              <h3>Länkar</h3>
              <Link to="/">Hem</Link>
              <Link to="/">Tidslinje</Link>
              <Link to="/contact">Samarbete</Link>
              <Link to="/about">Om oss</Link>
            </div>
            <div className={styles.links}>
              <h3>Socialt</h3>
              <a href="https://www.facebook.com/NLGmedieteknik">Facebook</a>
              <a href="http://www.instagram.com/nlg_medieteknik">Instagram</a>
            </div>
          </div>
          <p className={styles.copyright}>
          © {new Date().getFullYear()  + " Näringslivsgruppen Medieteknik | KTH"}
          </p>
        </div>
      </div>
    </footer>
  )
}
