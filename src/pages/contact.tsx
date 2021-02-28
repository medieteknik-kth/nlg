import React from "react"
import Layout from "../components/layout"
import amalia from "src/images/amalia.jpg"
import styles from "./contact.module.scss"

function Contact() {
  return (
    <Layout page={2} title="Samarbete">
      <div className={styles.containerMain}>
        <div className={styles.containerCenter}>
          <h1>Samarbete</h1>
          <p>Kontakta oss för att samarbeta med Sektionen för Medieteknik på KTH! Vi erbjuder annonsering, event, föreläsningstillfällen eller andra saker ni vill hitta på med våra studenter.</p>
          <div className={styles.card}>
            <h2>Näringslivsansvarig</h2>
            <p>Amalia Berglöf</p>
            <img src={amalia} className={styles.profileImage}/>
            <a href="mailto: naringsliv@medieteknik.com">naringsliv@medieteknik.com</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
