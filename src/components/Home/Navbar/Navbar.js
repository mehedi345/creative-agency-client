import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
        <a classNames="navbar-brand" href="#">
           <img className="logo" src={logo} alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-3" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">Our Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">Our Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">Contact US</a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="text-decoration-none"><a class="nav-link mr-3 btn-brand text-white" href="#">Login</a></Link> 
            </li>
          </ul>
          
        </div>
      </nav>
    );
};

export default Navbar;