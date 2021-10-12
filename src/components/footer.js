import React from 'react'

// styles
import {footerStyles, footerSection, footerBlock, logo } from './vclayout.module.css'

const Footer = () => {
    return (
    <footer className={footerStyles}>
        <div className={footerBlock}>
            <div className={footerSection}>
                <h4>Contact</h4>
                General Research Lab 234A
                <br />
                1310 Maple St.
                <br />
                <a href="tel:3032733890">303-273-3890</a>
                <br />
                <a href="mailto:cdreyer@mines.edu?subject=Mail from Our Site">cdreyer@mines.edu</a>  
                <br />
            </div>
            <div className={footerSection}>
            <h4>PROGRAMS AND RESEARCH CENTERS</h4>
                <a href="https://space.mines.edu/" target="_blank" rel="noreferrer noopener">Space Resources Program</a>
                <br></br>
                <a href="https://space.mines.edu/research" target="_blank" rel="noreferrer noopener">Center for Space Resources</a>
            </div>
            <div className={footerSection}>
                <h4>Relavant Links</h4>
                <a href="https://scholar.google.com/citations?hl=en&user=KNg4Th0AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer noopener">Google Scholar</a>
                <br></br>
                <a href="https://www.linkedin.com/in/christopher-dreyer-7843187/" target="_blank" rel="noreferrer noopener">linkedin</a>
                <br></br>
                <a href="https://space.mines.edu/project/dreyer-christopher/" target="_blank" rel="noreferrer noopener">Mines profile</a>
            </div>
        </div>
        <div className={logo}>
            <div>Made With</div>
            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
        </div>
    </footer>
    )
  }
  export default Footer