import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styles from "./header.module.scss"
import logo from "src/images/nlg-icon.png"

interface Props {
  // Page number, first page is 0
  page: number
}
export default function Header(props: Props) {

  const [backgroundClass, setBackgroundClass] = useState("")
  useEffect(() => {
    document.addEventListener("scroll", adjustBackground);
    return () => {
      document.removeEventListener("scroll", adjustBackground)
    }
  }, [backgroundClass])

  function adjustBackground() {
    let scrolled = document.scrollingElement?.scrollTop
    if (scrolled != null) scrolled > 120 ? setBackgroundClass(styles.background) : setBackgroundClass("")
  }
  // Adds active styles if page number matches
  function getActiveClass(page: number): string {
    return page == props.page ? "active" : ""
  }

  return (
    <header className={styles.container + " " + backgroundClass}>
      <Link className={styles.titleContainer} to="/">
        <img className={styles.logo} src={logo} />
        <h1 className={styles.title}>Näringslivsgruppen</h1>
      </Link>
      <nav>
        <ul>
          {/* TODO: Add proper links */}
          <li>
            <Link
              className={styles.navItem + " " + styles[getActiveClass(0)]}
              to="/"
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem + " " + styles[getActiveClass(1)]}
              to="/timeline"
            >
              Tidslinje
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem + " " + styles[getActiveClass(2)]}
              to="/contact"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link className={styles.navItem + " " + styles[getActiveClass(3)]} to="/">
              Om oss
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
