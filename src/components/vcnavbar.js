import * as React from "react"
import { Link } from 'gatsby'

// styles     <polyline points="0,0 15,25 0.50" />
import { topnav, navlink, active, linktext, EFlinktext } from './vcnavbar.module.css'

const Chevron = ({ children, linkpath, linkstyle, abbr, linktext }) => {
  const polywidth = 50
  const polywidthedge = polywidth-15
  const polypoints = `0,0 15,25 0,50 ${polywidthedge},50 ${polywidth},25 ${polywidthedge},0` 
  return (
    <Link className={linkstyle} to={linkpath}>
      <p className={linktext}>{ children }</p>
      <svg viewBox="0 0 50 50" preserveAspectRatio="none">
        <polygon points={polypoints} />
        <text x="55%" y="60%" text-anchor="middle">{ abbr }</text>
      </svg>
    </Link>
  )
}

const VCNavBar = ({ activelink }) => {
  if (activelink === "Home") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Prospect") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={active} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Explore") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={active} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "EstFeasibility") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={active} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Mine") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={active} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Process") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={active} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Manufacturing") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={active} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Distribution") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={active} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
  if (activelink === "Sell") {
    return (
      <div className={topnav}>
        <Chevron linkpath="/vc0Prospect" linkstyle={navlink} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
        <Chevron linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={active} linktext={linktext} abbr={'SL'}>Sell</Chevron>
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