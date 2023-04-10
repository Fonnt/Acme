import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import content from 'utils/content.json'

const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/login')
  }
  return (
    <header className="outer-wrapper gradient-header">
      <nav className="nav-wrapper">
        <div className="logo-wrapper">
          <Link to="/"><img className="logo" src={content.utils.logo} alt="Acme Logotype" /></Link>
        </div>
        <div className="container">
          <ul className="links-wrapper">
            <li><Link to="/sed-magma">{content.header.text1}</Link></li>
            <li><Link to="/ultricies-ligula">{content.header.text2}</Link></li>
            <li><Link to="/curabitur">{content.header.text3}</Link></li>
            <li><Link to="/proin-eget-torto">{content.header.text4}</Link></li>
          </ul>
          <button type="button" onClick={handleOnClick} className="login-btn">
            <img src={content.utils.user_icon} alt="avatar." />
            <p className="disp-none">{content.header.text5}</p>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
