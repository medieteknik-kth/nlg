import React from "react"
import Layout from "../components/layout"
import * as styles from "./about.module.scss"

export default function About() {
  return (
    <Layout page={3} title="Om oss">
      <div className={styles.containerMain}>
        <div className={styles.containerCenter}>
          <div>
            <h1>Om oss</h1>
            <p><span>Vi är NLG, Medietekniksektionens näringslivsgrupp på KTH. </span>
              Medieteknik är en kreativ civilingenjörsutbildning som skolar nästa generations utvecklare, UX designers projektledare och spelutvecklare. 
              Vi blandar traditionella ingenjörsämnen med programmering, interaktionsdesign,  datorgrafik, visualisering, och maskininlärning bland annat. 
              </p><p>Sektionens näringslivsgrupp fungerar som studenternas förlängda arm ut iarbetslivet. 
              Vi ordnar företagsevent, lunchföreläsningar, företagspubar samt erbjuder annonsering på våra plattformar. 
              Ett samarbete med oss ärett kul sätt att exponera ert företag inför framtidens tech-talanger. 
              </p><p>Låter det intressant? Hör av er så planerar vi något ihop!</p>
          </div>
          <div className={styles.card}>
            <h2>Olika typer av event</h2>
            <p><span>Fysiska event</span></p>
            <p>Tillsammans anordnar vi AW:s, lunchföreläsningar, workshops, studiebesök, tv-spelskväll, skattjakt eller vad helst ni behagar. </p>
            <p><span>Företagspub</span></p>
            <p>Våra kanske mest uppskattade events innehåller god öl och mycket mingel. Lär känna medietekniksektionen på företagspub.</p>
            <p><span>Digitala event</span></p>
            <p>Möt medieteknikstudenter online! Vi hjälper er gärna att spåna fram ideér på kul event. Kanske är ni sugna på ett hackaton, en digitala föreläsning, en quizkväll, spelkväll eller något helt annat.</p>
            <p><span>Monter i meta</span></p>
            <p>I vår sektionslokal META rör sig hundratals studenter från medietekniksektionen och datasektionen varje dag. Vill ni hänga med oss?Då är en monter i META perfekt för er.</p>
            <p><span>Annonsera</span></p>
            <p>Vill ni annonsera om Ex-jobb, sommarjobb, traineeplatser, events eller något annat som skulle intressera en medieteknikstudent? Genom vår facebook och instagram når ni hela sektionen.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
