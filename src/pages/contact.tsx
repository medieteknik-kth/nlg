import React from "react"
import Layout from "../components/layout"
import placeholder from "../images/profilbilder/hs/default.png"
import joakim from "../images/profilbilder/hs/joakim.jpg"
import tindra from "../images/profilbilder/hs/tindra.jpg"
import emil from "../images/profilbilder/hs/emil.jpg"
import george from "../images/profilbilder/hs/george.jpg"
import jose from "../images/profilbilder/hs/jose.jpg"
import kajsa from "../images/profilbilder/hs/kajsa.jpg"
import marcus from "../images/profilbilder/hs/marcus.jpg"
import negar from "../images/profilbilder/hs/negar.jpg"
import patrik from "../images/profilbilder/hs/patrik.jpg"
import molly from "../images/profilbilder/hs/molly.jpg"
import * as styles from "./contact.module.scss"

function Contact() {
  return (
    <Layout page={2} title="Samarbete">
      <div className={styles.containerMain}>
        <div className={styles.containerCenter}>
          <h1>Samarbete</h1>
          <p>
            Kontakta oss för att samarbeta med Sektionen för Medieteknik på KTH!
            Vi erbjuder annonsering, event, föreläsningstillfällen eller andra
            saker ni vill hitta på med våra studenter.
          </p>
          <div className={styles.card}>
            <h2>Näringslivsansvarig</h2>
            <img src={emil} className={styles.profileImage} />
            <p>Emil Lidbom</p>
            <a href="mailto: naringsliv@medieteknik.com">
              naringsliv@medieteknik.com
            </a>
          </div>
          <div className={styles.card2}>
            <h2>Sälj</h2>
            <img src={negar} className={styles.profileImage} />
            <p>Negar Fazeli</p>
            <a href="mailto: negar@medieteknik.com">negar@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Sälj</h2>
            <img src={george} className={styles.profileImage} />
            <p>George Dalman</p>
            <a href="mailto: george@medieteknik.com">george@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Sälj</h2>
            <img src={marcus} className={styles.profileImage} />
            <p>Marcus Påhlman</p>
            <a href="mailto: marcus@medieteknik.com">marcus@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Sälj</h2>
            <img src={tindra} className={styles.profileImage} />
            <p>Tindra Li</p>
            <a href="mailto: tindra@medieteknik.com">tindra@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Logistikansvarig</h2>
            <img src={kajsa} className={styles.profileImage} />
            <p>Kajsa Lidin</p>
            <a href="mailto: kajsa@medieteknik.com">kajsa@medieteknik.com</a>
          </div>
          <div className={styles.card3_longmailfix}>
            <h2>PR</h2>
            <img src={patrik} className={styles.profileImage} />
            <p>Patrik Larsson</p>
            <a href="mailto: patrik.pr@medieteknik.com">
            patrik.pr@medieteknik.com
            </a>
          </div>
          <div className={styles.card3}>
            <h2>PR</h2>
            <img src={jose} className={styles.profileImage} />
            <p>Jose W. Velásquez C</p>
            <a href="mailto:  jwevc@kth.se">
            jwevc@kth.se
            </a>
          </div>
          <div className={styles.card3}>
            <h2>PR</h2>
            <img src={molly} className={styles.profileImage} />
            <p>Molly Gidfors Haraldsson</p>
            <a href="mailto: mollyha@kth.se">mollyha@kth.se</a>
          </div>
          <div className={styles.card2}>
            <h2>Webbansvarig</h2>
            <img src={joakim} className={styles.profileImage} />
            <p>Joakim Strand</p>
            <a href="mailto: joakstr@kth.se">
              joakstr@kth.se
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact