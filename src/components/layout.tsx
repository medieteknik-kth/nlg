import React from "react"
import Header from "../components/header"
import Footer from "./footer"

interface Props {
  page: number
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, page }) => {
  
  return (
    <>
      <div className="containerMaster">
        <Header page={page} />
          <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
