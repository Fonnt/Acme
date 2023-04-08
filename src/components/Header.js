import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/acme-logo.svg'

const Header = () => {
  return (
    <header className="outer-wrapper gradient-header">
      <nav className="nav-wrapper">
        <Link to="/"><img className="logo" src={logo} alt="Acme Logotype" /></Link>
        <ul className="links-wrapper">
          <li><Link to="/sed-magma">SED MAGMA</Link></li>
          <li><Link to="/ultricies-ligula">ULTRICIES LIGULA</Link></li>
          <li><Link to="/curabitur">CURABITUR</Link></li>
          <li><Link to="/proin-eget-torto">PROIN EGET TORTO</Link></li>
        </ul>
        <Link to="/login">
          <button type="button" className="login-btn">
            <img src="assets/user.svg" alt="" />
            LOGIN
          </button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
