import * as React from "react"
import { Link } from 'gatsby'

// styles 
import { topnav, navlink, active, linktext, EFlinktext, ex, startsvg, arrowsvg, activelinesvg } from './vcnavbar.module.css'

const Chevron = ({ children, linkpath, linkstyle, abbr, linktext, idname }) => {
  const polywidth = 50
  const polywidthedge = polywidth-15
  const arrowpolypoints = `0,0 15,25 0,50 ${polywidthedge},50 ${polywidth},25 ${polywidthedge},0` 
  const startpolypoints = `0,0 0,50 ${polywidthedge},50 ${polywidth},25 ${polywidthedge},0` 
  return (
    <Link className={linkstyle} to={linkpath} id={idname}>
      <p className={linktext}>{ children }</p>
      <svg className={activelinesvg} viewBox="0 0 15 50" preserveAspectRatio="none">
        <polyline points="0,0 15,25 0,50" stroke-width="3px" />
      </svg>
      <svg className={arrowsvg} viewBox="0 0 50 50" preserveAspectRatio="none">
        {/* <polyline points="0,0 15,25 0,50" /> */}
        <polygon points={arrowpolypoints} />
        <text x="55%" y="60%" textAnchor="middle">{ abbr }</text>
      </svg>
      <svg className={startsvg} viewBox="0 0 50 50" preserveAspectRatio="none">
        {/* <polyline points="0,0 15,25 0,50" /> */}
        <polygon points={startpolypoints} />
        <text x="55%" y="60%" textAnchor="middle">{ abbr }</text>
      </svg>
    </Link>
  )
}

const VCNavBar = ({ activelink }) => {
  if (activelink === "Home") {
    return (
      <div className={topnav}>
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc0Prospect" linkstyle={active} linktext={linktext} abbr={'PS'}>Prospect</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={active} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
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
        <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
        <Chevron linkpath="/vc2EstFeasibility" linkstyle={navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
        <Chevron linkpath="/vc3Mine" linkstyle={navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
        <Chevron linkpath="/vc4Process" linkstyle={navlink} linktext={linktext} abbr={'PC'}>Process</Chevron>
        <Chevron linkpath="/vc5Manufacturing" linkstyle={navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
        <Chevron linkpath="/vc6Distribution" linkstyle={navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
        <Chevron linkpath="/vc7Sell" linkstyle={active} linktext={linktext} abbr={'SL'}>Sell</Chevron>
      </div>
      )
  }
}

export default VCNavBar