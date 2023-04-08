import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/Acme-logo.png'

const Header = () => {
  return (
    <nav>
      <Link className="logo" to="/"><img src={logo} alt="Acme Corporation" /></Link>
    </nav>
  )
}

export default Header

