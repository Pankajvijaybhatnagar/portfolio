import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
       <img src="p.png.png" alt="" className="logo"/>
       <div className="desktopMenu">
      <Link activeClass='active' to="intro" spy="true" smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
      <Link activeClass='active' to="skills" spy="true" smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
      <Link activeClass='active' to="works" spy="true" smooth="true" offset={-50} duration={500} className="desktopMenuListItem">About</Link>
      </div>
       <button className="desktopMenuBtn"  onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"});
       }}>
      <img src="211605_contact_icon.png" alt="" className="desktopMenuImg"/>Contact me
       </button>
      </nav>

    </div>
  )
}

export default Navbar