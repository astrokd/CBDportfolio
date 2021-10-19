import React from 'react'
import { Link } from 'gatsby'

// styles
import { headingStyles, linkStyles, aLinks, burger, links, headermenu } from './vclayout.module.css'

const Burger = (props) => {
  return (
    <button aria-label="hamburgerMenu" onClick={props.onMyClick}>
      <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"/></svg>
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
          <div className={burger} onMyClick={() => this.handleClick()}> { this.state.navbaropen ? <HeaderNav class={headermenu}/> : <Burger /> } </div>
            <HeaderNav class={links}/>
        </nav>
      </header>
    )
  }
}

// const Header = () => {
//     return (
//       <header>
//         <div className={headingStyles}>
//           <h1> Christopher Dreyer</h1>
//           <h3>Professor of Practice, Mechanical Engineering</h3>
//         </div>
//         <nav className={linkStyles}>
//           <button className={burger}><Burger /></button>
//           <ul className={links}>
//             <HeaderNav />
//           </ul>
//         </nav>
//       </header>
//     )
//   }

  export default Header