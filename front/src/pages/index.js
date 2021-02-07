import React from "react"
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
  return(
    <div>
      <Header />
      <h2>Ultimate Cooking Blog</h2>
      <p>Click <a href="/contact">here</a> to contact us for catering needs!</p>
      <p>Click <Link to="/contact">here</Link> to contact us for catering needs!</p>
      <Footer />
    </div>
  )
}

export default IndexPage