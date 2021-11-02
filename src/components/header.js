import React from 'react'
import './header.css'
import logo from '../assets/image1.png'
import help from '../assets/help.svg'
import noti from '../assets/in.svg'
import avatar from '../assets/Group.png'

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} alt="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"  ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">AI Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Deployments</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Model Registry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Applications</a>
            </li>
          </ul>

          <img src={help} alt="help" style={{marginRight:'10px'}}/>
          <img src={noti} alt="noti" style={{marginRight:'10px'}} />
          <img src={avatar} alt="avatar" style={{marginRight:'10px'}} />

        </div>
      </div>
    </nav>
    )
}

export default Header
