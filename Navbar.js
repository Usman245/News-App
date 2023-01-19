import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Pk News</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link active" aria-current="page" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/">Genral</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" efhr="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/technology">Technology</Link>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
    )
  }
}


