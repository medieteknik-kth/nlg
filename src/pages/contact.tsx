import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="ContactUs" />
      <h1>Contact Us</h1>
      <p>The best way to contact us is by email</p>
      <Link className={"btn"} to="/">
        Till hemsidan
      </Link>
    </Layout>
  )
}

export default ContactPage
