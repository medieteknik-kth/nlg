import React from "react"
import Layout from "../components/layout"
import noella from "../images/noella.jpg"
import elias from "../images/elias.jpg"
import emil from "../images/emil.jpg"
import isabella from "../images/isabella.jpg"
import nora from "../images/nora.jpg"
import oscar from "../images/oscar.jpg"
import emil2 from "../images/emil2.jpg"
import jackie from "../images/jackie.jpg"
import vivi from "../images/vivi.jpg"
import luca from "../images/luca.jpg"
import julia from "../images/julia.jpg"
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
            <img src={noella} className={styles.profileImage} />
            <p>Noella Rahman</p>
            <a href="mailto: naringsliv@medieteknik.com">
              naringsliv@medieteknik.com
            </a>
          </div>
          <div className={styles.card}>
            <h2>Företagsansvarig</h2>
            <img src={elias} className={styles.profileImage} />
            <p>Elias Hedlin</p>
            <a href="mailto: Elias@libredo.se">Elias@libredo.se</a>
          </div>
          <div className={styles.card}>
            <h2>Företagsansvarig</h2>
            <img src={emil} className={styles.profileImage} />
            <p>Emil Lidbom</p>
            <a href="mailto: Emilnils.lidbom@gmail.com">
              Emilnils.lidbom@gmail.com
            </a>
          </div>
          <div className={styles.card}>
            <h2>Företagsansvarig</h2>
            <img src={isabella} className={styles.profileImage} />
            <p>Isabella Gobl</p>
            <a href="mailto: igobl@kth.se">igobl@kth.se</a>
          </div>
          <div className={styles.card}>
            <h2>Företagsansvarig</h2>
            <img src={nora} className={styles.profileImage} />
            <p>Nora Dunder</p>
            <a href="mailto: ndunder@kth.se">ndunder@kth.se</a>
          </div>
          <div className={styles.card}>
            <h2>Eventansvarig</h2>
            <img src={oscar} className={styles.profileImage} />
            <p>Oscar Wester</p>
            <a href="mailto: Oscar.wester@me.com">Oscar.wester@me.com</a>
          </div>
          <div className={styles.card}>
            <h2>Eventansvarig</h2>
            <img src={emil2} className={styles.profileImage} />
            <p>Emil Cromnier</p>
            <a href="mailto: emil.cromnier@gmail.com">
              emil.cromnier@gmail.com
            </a>
          </div>
          <div className={styles.card}>
            <h2>PR/Art director</h2>
            <img src={jackie} className={styles.profileImage} />
            <p>Jackie Hellsten</p>
            <a href="mailto: jackieh@kth.se">jackieh@kth.se</a>
          </div>
          <div className={styles.card}>
            <h2>PR/Art director</h2>
            <img src={vivi} className={styles.profileImage} />
            <p>Vivi Andersson</p>
            <a href="mailto: Viviandersson0@gmail.com">
              Viviandersson0@gmail.com
            </a>
          </div>
          <div className={styles.card}>
            <h2>Webbansvarig</h2>
            <img src={luca} className={styles.profileImage} />
            <p>Luca Lancella</p>
            <a href="mailto: lucalan97@icloud.com">lucalan97@icloud.com</a>
          </div>
          <div className={styles.card}>
            <h2>Webbansvarig</h2>
            <img src={julia} className={styles.profileImage} />
            <p>Julia Hallberg</p>
            <a href="mailto: Juliahallberg98@outlook.com">
              Juliahallberg98@outlook.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
