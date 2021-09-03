import React from 'react'
import { Link } from 'gatsby'

// styles
import { headingStyles, linkStyles, aLinks } from './vclayout.module.css'

const Header = () => {
    return (
      <header>
        <div className={headingStyles}>
          <h1> Christopher Dreyer</h1>
          <h3>Professor of Practice, Mechanical Engineering</h3>
        </div>
        <nav className={linkStyles}>
          <Link className={aLinks} id="home" to="/">Home</Link>
          <Link className={aLinks} id="bio" to="/bio">Bio</Link>
          <Link className={aLinks} id="pub" to="/publications">Publications</Link>
        </nav>
      </header>
    )
  }

  export default Header