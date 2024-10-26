import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkdin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
      
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={insta} alt="" />
                <img src={linkdin} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>

            <div className="blur f-blur-1"></div>
            <div className="blur f-blur-2"></div>
        </div>
    </div>
  )
}

export default Footer