import React, { Children } from 'react'
import { Link } from 'gatsby'

// styles
import { headingStyles, linkStyles, aLinks, burger, links, headermenu, closeButton, menu } from './vclayout.module.css'

const Burger = (props) => {
  return (
    <button aria-label="hamburgerMenu" onClick={props.onMyClick}>
      <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"/></svg>
    </button>
  )
}

const Close = (props) => {
  return (
    <button onClick={props.onMyClick}>
       <svg viewBox="0 0 24 24" width="24px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  )
}

const HeaderNav = (props) => {
  return (
    <ul className={props.class}>
        <Link className={aLinks} id="home" to="/">Home</Link>
        <Link className={aLinks} id="bio" to="/bio">Bio</Link>
        <Link className={aLinks} id="pub" to="/publications">Publications</Link>
        <Link className={aLinks} id="stu" to="/students">Students</Link>
    </ul>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbaropen: false,
    }
  }

  handleClick() {
    console.log("in handleClick")
    this.setState({
      navbaropen: !this.state.navbaropen,
    });
  }

  render() {
    return (
      <header>
        <div className={headingStyles}>
          <h1> Christopher Dreyer</h1>
          <h3>Professor of Practice, Mechanical Engineering</h3>
        </div>
        <nav className={linkStyles}>
          <div className={burger}> 
            { this.state.navbaropen 
              ? <div className={menu}>
                  <Close className={closeButton} onMyClick={() => this.handleClick()} />
                  <HeaderNav class={headermenu} />
                </div> 
              : <Burger onMyClick={() => this.handleClick()} /> } </div>
          <HeaderNav class={links} />
        </nav>
      </header>
    )
  }
}

  export default Header