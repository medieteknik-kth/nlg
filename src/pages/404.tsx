import { Link } from "gatsby"
import React from "react"
import styles from "./404.module.scss"

export default function NotFound() {
    return (
        <div className="container-master">
            <h1>Oops! Den här sidan finns inte.</h1>
            <Link className={"btn " + styles.btn} to="/">Till hemsidan</Link>
        </div>
    )
}
