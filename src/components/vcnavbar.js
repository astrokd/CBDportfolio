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
      <svg className={activelinesvg} viewBox="0 0 15 50" preserveAspectRatio="none">
        <polyline points="0,0 15,25 0,50" strokeWidth="3px" />
      </svg>
      <p className={linktext}>{ children }</p>
      <svg className={arrowsvg} viewBox="0 0 50 50" preserveAspectRatio="none">
        <polygon points={arrowpolypoints} />
        <text x="55%" y="60%" textAnchor="middle">{ abbr }</text>
      </svg>
      <svg className={startsvg} viewBox="0 0 50 50" preserveAspectRatio="none">
        <polygon points={startpolypoints} />
        <text x="50%" y="60%" textAnchor="middle">{ abbr }</text>
      </svg>
    </Link>
  )
}

const VCNavBar = (props) => {
  return (
    <nav className={topnav}>
      <Chevron idname={ex} linkpath="/vc1Explore" linkstyle={(props.activelink === "Explore") ? active : navlink} linktext={linktext} abbr={'EX'}>Explore</Chevron>
      <Chevron linkpath="/vc2EstFeasibility" linkstyle={(props.activelink === "EstFeasibility") ? active : navlink} linktext={EFlinktext} abbr={'EF'}>Establish Feasibility</Chevron>
      <Chevron linkpath="/vc3Mine" linkstyle={(props.activelink === "Mine") ? active : navlink} linktext={linktext} abbr={'MN'}>Mine</Chevron>
      <Chevron linkpath="/vc4Process" linkstyle={(props.activelink === "Process") ? active : navlink}linktext={linktext} abbr={'PC'}>Process</Chevron>
      <Chevron linkpath="/vc5Manufacturing" linkstyle={(props.activelink === "Manufacturing") ? active : navlink} linktext={linktext} abbr={'MF'}>Manufacturing</Chevron>
      <Chevron linkpath="/vc6Distribution" linkstyle={(props.activelink === "Distribution") ? active : navlink} linktext={linktext} abbr={'DS'}>Distribution</Chevron>
      <Chevron linkpath="/vc7Sell" linkstyle={(props.activelink === "Sell") ? active : navlink} linktext={linktext} abbr={'SL'}>Sell</Chevron>
    </nav>
  )
}

export default VCNavBar