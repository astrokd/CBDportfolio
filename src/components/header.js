import React from 'react'
import { Link } from 'gatsby'

// styles
import { headingStyles, linkStyles, } from './vclayout.module.css'

const Header = () => {
    return (
      <header>
        <div className={headingStyles}>
          <h1> Christopher Dreyer</h1>
          <h3>Professor of Practice, Mechanical Engineering</h3>
        </div>
        <div className={linkStyles}>
          <Link to="/">Home</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/publications">Publications</Link>
        </div>
      </header>
    )
  }

  export default Header