import React from 'react';
import Button from './Button.jsx';

const MenuBar = (props) => {
  return (
    <header className="navbar" id="menu-bar">
      <img src="https://i.ibb.co/BPxrzNW/initech-horizontal-logo.png" alt="logo" />
      {/* <h4 id="logo">corp</h4> */}
      <nav>
        <ul id="menu-bar-list">
          <li id="navbar-category">
            <a href="#">About</a>
            {/* <div className="dropdown-content">
              <a href="#">Mission</a>
              <a href="#">Our History</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
            </div> */}
          </li>
          <li id="navbar-category"><a href="#">What We Do</a></li>
          <li id="navbar-category"><a href="#">Our Clients</a></li>
          <Button text="Log In" id="login-button" />
        </ul>
      </nav>
    </header>
  )
};

export default MenuBar;


/**
 * logo graphic: https://i.ibb.co/kSHcC6L/logo.png
 * horizontal logo: https://i.ibb.co/Ms0Bwzm/horizontal-logo.png
 * initech logo: https://i.ibb.co/BPxrzNW/initech-horizontal-logo.png
 */