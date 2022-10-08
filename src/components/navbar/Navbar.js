import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamburger from "../../images/menu.png";
const Navbar = () => {
  const [togglenav, settogglenav] = useState(false);

  return (
    <nav>
      <img src={logo} alt="shortly" />
      <button
        className="hamburger"
        id="togglemenu"
        aria-expanded={togglenav}
        aria-label="toggle-menu"
        onClick={() => {
          settogglenav(!togglenav);
        }}
        // onclick="ToggleMenu()"
      >
        <img src={hamburger} alt="" />
      </button>
      <div className="main-nav">
        <ul className="navlinks">
          <li>
            <a aria-label="features" href="/">
              features
            </a>
          </li>
          <li>
            <a aria-label="pricing" href="/">
              pricing
            </a>
          </li>
          <li>
            <a aria-label="resources" href="/">
              resources
            </a>
          </li>
        </ul>
        <div className="auth">
          <a aria-label="login" href="/">
            login
          </a>
          <a aria-label="signup" className="decorated-btn" href="/">
            signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
