import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="#">
           <img class="logo" src={logo} alt="logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-3" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Our Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Contact US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3 btn-brand text-white" href="#">Login</a>
            </li>
          </ul>
          
        </div>
      </nav>
    );
};

export default Navbar;