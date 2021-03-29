import React from "react"
import Header from "../components/header"
import Footer from "./footer"
import SEO from "./seo"

interface Props {
  page: number
  title: string
  children?: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <>
      <SEO title={props.title} />
      <div className="containerMaster">
        <Header page={props.page} />
          <main>{props.children}</main>
      </div>
      <Footer/>
    </>
  )
}
