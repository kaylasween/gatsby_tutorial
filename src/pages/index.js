import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{color: 'green'}}>
    <Header headerText="Hello Gatsby!" />
    <Link to="/contact/">Contact</Link>
    <p>My first Gatsby page.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image" />
  </div>
)
