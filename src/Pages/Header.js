import React from 'react'
import './Header.css'
import logo from '../images/mindplm.png'

function Header() {
  return (
    
    <nav className="navbar navbar-expand-lg" role="navigation">
    <div className="container-fluid">
      <a className="navbar-brand" href="./Home">
      <img src={logo} alt="Logo" width="150" height="50" className="d-inline-block align-text-top"></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link fw-normal fs-5 text-light " href="#!">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-normal fs-5 text-light" href="#!">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-normal fs-5 text-light" href="#!">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-normal fs-5 text-light" href="#!">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-normal fs-5 text-light" href="#!">Contact</a>
          </li>
        </ul>
        <button className="btn btn-light fw-bold custom-btn" type="button">Sign In</button> 
      </div>
    </div>
  </nav>

  )
}

export default Header