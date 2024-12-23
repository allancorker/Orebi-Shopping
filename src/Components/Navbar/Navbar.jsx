import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">OREBI</a>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Journal</a>
      </nav>
    </header>
  )
}

export default Navbar