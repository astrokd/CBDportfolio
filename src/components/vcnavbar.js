import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './vcnavbar.module.css'

const Start = ({ children, linkpath, linkstyle }) => {
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg width="200px" height="50px" viewBox="0 0 200 50">
        <polygon points="0,0 0,50 175,50 200,25 175,0" />
        <text x="50%" y="60%" text-anchor="middle">{ children }</text>
      </svg>
    </Link>
  )
}

const Arrow = ({ children, linkpath, linkstyle }) => {
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg width="200px" height="50px" viewBox="0 0 200 50">
        <polygon points="0,0 25,25 0,50 175,50 200,25 175,0" />
        <text x="50%" y="60%" text-anchor="middle">{ children }</text>
      </svg>
    </Link>
  )
}

// Space Resources Value Chain Data
const srvc = [
  {
    pageName: "vc0Prospect",
    vcName: "Prospect"
  },
  {
    pageName: "vc1Explore",
    vcName: "Explore"
  },
  {
    pageName: "vc2EstFeasibility",
    vcName: "Establish Feasibility"
  },
  {
    pageName: "vc3Mine",
    vcName: "Mine"
  },
  {
    pageName: "vc4Process",
    vcName: "Process"
  },
  {
    pageName: "vc5Manufacturing",
    vcName: "Manufacturing"
  },
  {
    pageName: "vc6Distribution",
    vcName: "Distribution"
  },
  {
    pageName: "vc7Sell",
    vcName: "Sell"
  }
]

const VCNavBar = ({ activelink }) => {
  if (activelink === "Home") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Prospect") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={active}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Explore") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={active}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "EstFeasibility") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={active}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Mine") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={active}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Process") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={active}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Manufacturing") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={active}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Distribution") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={active}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={navlink}>Sell</Arrow>
      </div>
      )
  }
  if (activelink === "Sell") {
    return (
      <div className={topnav}>
        <Start linkpath="/vc0Prospect" linkstyle={navlink}>Prospect</Start>
        <Arrow linkpath="/vc1Explore" linkstyle={navlink}>Explore</Arrow>
        <Arrow linkpath="/vc2EstFeasibility" linkstyle={navlink}>Establish Feasibility</Arrow>
        <Arrow linkpath="/vc3Mine" linkstyle={navlink}>Mine</Arrow>
        <Arrow linkpath="/vc4Process" linkstyle={navlink}>Process</Arrow>
        <Arrow linkpath="/vc5Manufacturing" linkstyle={navlink}>Manufacturing</Arrow>
        <Arrow linkpath="/vc6Distribution" linkstyle={navlink}>Distribution</Arrow>
        <Arrow linkpath="/vc7Sell" linkstyle={active}>Sell</Arrow>
      </div>
      )
  }
}

export default VCNavBar