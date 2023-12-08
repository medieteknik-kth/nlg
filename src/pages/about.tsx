import React from "react"
import Layout from "../components/layout"
import gruppen from "../images/gruppen.jpg"
import event from "../images/event.jpg"
import meta from "../images/meta.jpg"
import internet from "../images/internet3.png"
//import digital from "../images/digital.jpg"
import pub from "../images/pub.jpg"
import * as styles from "./about.module.scss"
//import Pdf from '../images/Prospekt.pdf'

//Länk till pdf:
//<a href = {Pdf} target = "_blank">Här</a> -->

export default function About() {
  return (
      <Layout page={3} title="Om oss">
        <div className={styles.containerMain}>
          <div className={styles.containerCenter}>
            <div>
              <h1>Om oss</h1>
              <img src={gruppen} className={styles.groupImage} />
              <p><span>Vi är NLG, <a href="https://www.medieteknik.com/">Medietekniksektionens</a> näringslivsgrupp på KTH. </span>
              Medieteknik är en kreativ civilingenjörsutbildning som skolar nästa generations utvecklare, UX-designers, projektledare och spelutvecklare.
                Vi blandar traditionella ingenjörsämnen med programmering, interaktionsdesign, datorgrafik, visualisering, och maskininlärning bland annat. <a href="https://www.kth.se/utbildning/civilingenjor/medieteknik/medieteknik-civilingenjor-300-hp-1.4150">Här</a> hittar ni mer information om programmet.
              </p><p>Sektionens näringslivsgrupp fungerar som studenternas förlängda arm ut i arbetslivet.
                Vi ordnar företagsevent, lunchföreläsningar, företagspubar samt erbjuder annonsering på våra plattformar.
                Ett samarbete med oss är ett kul sätt att exponera ert företag inför framtidens tech-talanger.
              </p><p>Låter det intressant? Hör av er så planerar vi något ihop! För information om priser med mera, kontakta oss!</p>
            </div>
             
            <div className={styles.card}>
              <h2>Olika typer av event</h2>            
              <img src={event} className={styles.eventImage} /> 
              <p><span>Fysiska event</span></p>
              <p>Tillsammans anordnar vi AW:s, lunchföreläsningar, workshops, studiebesök, tv-spelskväll, skattjakt eller vad helst ni behagar.</p>
              <img src={pub} className={styles.eventImage} />
              <p><span>Företagspub</span></p>
              <p>Våra kanske mest uppskattade events innehåller god öl och mycket mingel. Lär känna medietekniksektionen på företagspub.</p>
              <img src={meta} className={styles.eventImage} />
              <p><span>Monter i meta</span></p>
              <p>I vår sektionslokal META rör sig hundratals studenter från medietekniksektionen och datasektionen varje dag. Vill ni hänga med oss? Då är en monter i META perfekt för er.</p>
              <img src={internet} className={styles.eventImage} />
              <p><span>Annonsera</span></p>
              <p>Vill ni annonsera om Ex-jobb, sommarjobb, traineeplatser, events eller något annat som skulle intressera en medieteknikstudent? Genom vår <a href="https://www.facebook.com/NLGmedieteknik">Facebook</a>
              , <a href="https://www.instagram.com/naringsliv_medieteknik/">Instagram</a> och <a href="https://www.linkedin.com/company/nlgmedieteknik">LinkedIn</a> når ni hela sektionen.</p>
            </div>
          </div>
        </div>
      </Layout>
  )} 