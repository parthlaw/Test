import React from "react";
import "./Nav.css";
import menu from "./menu.png";
import Logo from "./Logo.png";
const Nav = () => {
  return (
    <div>
      <div className="LogoImg">
        <img src={Logo} alt="Logo" className="CompLogo" />
      </div>
      <nav class="navbar">
        <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
          <img src={menu} alt="Menu" />
        </label>
        <input type="checkbox" id="chkToggle"></input>
        <ul class="main-nav">
          <li>
            <a href="#" class="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Shop
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              About
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
