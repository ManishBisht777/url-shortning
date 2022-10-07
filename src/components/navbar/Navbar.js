import React from "react";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="shortly" />
      <button
        className="hamburger"
        id="togglemenu"
        aria-expanded="false"
        aria-label="toggle-menu"
        // onclick="ToggleMenu()"
      >
        {/* <img src="./images/icon-hamburger.svg" alt="" /> */}
        hamburger
      </button>
      <div className="main-nav">
        <ul className="navlinks">
          <li>
            <a href="/">features</a>
          </li>
          <li>
            <a href="/">pricing</a>
          </li>
          <li>
            <a href="/">resources</a>
          </li>
        </ul>
        <div className="auth">
          <a href="/">login</a>
          <a className="decorated-btn" href="/">
            signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
