import * as React from "react"
import { Link } from 'gatsby'

// styles
import { topnav, navlink, active } from './vcnavbar.module.css'

const Start = ({ children, linkpath, linkstyle }) => {
  const polywidth = 200
  const polywidthedge = polywidth-25
  const polypoints = `0,0 0,50 ${polywidthedge},50 ${polywidth},25 ${polywidthedge},0` 
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg viewBox="0 0 200 50" preserveAspectRatio="none">
        <polygon points={polypoints} />
        <text x="50%" y="60%" text-anchor="middle">{ children }</text>
      </svg>
    </Link>
  )
}

const Arrow = ({ children, linkpath, linkstyle }) => {
  const polywidth = 200
  const polywidthedge = polywidth-25
  const polypoints = `0,0 25,25 0,50 ${polywidthedge},50 ${polywidth},25 ${polywidthedge},0` 
  return (
    <Link className={linkstyle} to={linkpath}>
      <svg viewBox="0 0 200 50" preserveAspectRatio="none">
        <polygon points={polypoints} />
        <text x="50%" y="60%" text-anchor="middle">{ children }</text>
      </svg>
    </Link>
  )
}

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
  if (activelink === "Bio") {
    return (
      <>
      </>
      )
  }
  if (activelink === "Pub") {
    return (
      <>
      </>
      )
  }
}

export default VCNavBar