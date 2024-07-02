/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  bg-warning`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>Portfolio</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href='#contact'>Contact</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href='#About'>About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}


// navbar-${props.theme}

// text-${props.theme==='light'?'dark':'light'}