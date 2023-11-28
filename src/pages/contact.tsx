import React from "react"
import Layout from "../components/layout"
import placeholder from "../images/profilbilder/hs/default.png"
import joakim from "../images/profilbilder/hs/joakim.png"
import bahar from "../images/profilbilder/hs/bahar.png"
import david from "../images/profilbilder/hs/david.png"
import ebba from "../images/profilbilder/hs/ebba.png"
import erik from "../images/profilbilder/hs/erik.png"
import favour from "../images/profilbilder/hs/favour.png"
import joel from "../images/profilbilder/hs/joel.png"
import liza from "../images/profilbilder/hs/liza.png"
import molly from "../images/profilbilder/hs/molly.png"
import tingting_negar from "../images/profilbilder/hs/tingting_negar.png"
import yabing from "../images/profilbilder/hs/yabing.png"
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
            <h2>Näringslivsansvariga</h2>
            <img src={tingting_negar} className={styles.profileImage} />
            <p>Ting Ting Li och Negar Fazeli</p>
            <a href="mailto: naringsliv@medieteknik.com">
              naringsliv@medieteknik.com
            </a>
          </div>
          <div className={styles.card2}>
            <h2>Företag</h2>
            <img src={david} className={styles.profileImage} />
            <p>David Franzén</p>
            <a href="mailto: david@medieteknik.com">david@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Företag</h2>
            <img src={liza} className={styles.profileImage} />
            <p>Liza Aziz</p>
            <a href="mailto: liza@medieteknik.com">liza@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Företag</h2>
            <img src={joel} className={styles.profileImage} />
            <p>Joel von Krusenstjerna</p>
            <a href="mailto: joel@medieteknik.com">joel@medieteknik.com</a>
          </div>
          <div className={styles.card2}>
            <h2>Företag</h2>
            <img src={placeholder} className={styles.profileImage} />
            <p>George Dalman</p>
            <a href="mailto: george@medieteknik.com">george@medieteknik.com</a>
          </div>
          <div className={styles.card4}>
            <h2>Logistik</h2>
            <img src={favour} className={styles.profileImage} />
            <p>Favour Ezennaya</p>
            <a href="mailto: favour@medieteknik.com">favour@medieteknik.com</a>
          </div>
          <div className={styles.card4}>
            <h2>Logistik</h2>
            <img src={yabing} className={styles.profileImage} />
            <p>Yabing Cai</p>
            <a href="mailto: yabing@medieteknik.com">yabing@medieteknik.com</a>
          </div>
          <div className={styles.card4}>
            <h2>PR</h2>
            <img src={molly} className={styles.profileImage} />
            <p>Molly Gidfors Haraldsson</p>
            <a href="mailto: gidfors@medieteknik.com">gidfors@medieteknik.com</a>
          </div>
          <div className={styles.card4}>
            <h2>PR</h2>
            <img src={bahar} className={styles.profileImage} />
            <p>Bahar Kimanos</p>
            <a href="mailto: bahar@medieteknik.com">
            bahar@medieteknik.com
            </a>
          </div>
          <div className={styles.card4}>
            <h2>PR</h2>
            <img src={ebba} className={styles.profileImage} />
            <p>Ebba Adolphson</p>
            <a href="mailto: adolphson@medieteknik.com">
            adolphson@medieteknik.com
            </a>
          </div>

          <div className={styles.invisiblecard_wide}></div>

          <div className={styles.card2}>
            <h2>Webbansvarig</h2>
            <img src={joakim} className={styles.profileImage} />
            <p>Joakim Strand</p>
            <a href="mailto: joakim@medieteknik.com">
            joakim@medieteknik.com
            </a>
          </div>
          <div className={styles.card2}>
            <h2>Webbansvarig</h2>
            <img src={erik} className={styles.profileImage} />
            <p>Erik Sevelin</p>
            <a href="mailto: erik@medieteknik.com">
            erik@medieteknik.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact