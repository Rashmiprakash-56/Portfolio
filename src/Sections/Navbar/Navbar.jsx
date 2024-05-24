import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <div className="navbar-conatiner">
    <div className="name-container"><p>Rashmiprakash Satapathy</p></div>
    <div className="section-container">
      <ul className="nav-links">
       <li><a href="#Home">Home</a></li>
       <li><a href="#About">About</a></li>
       <li><a href="#Projects">Projects</a></li>
       <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
   </div>
  )
}

export default Navbar 