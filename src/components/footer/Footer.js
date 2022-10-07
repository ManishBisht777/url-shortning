import React from "react";
import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />
      <ul>
        <p>Features</p>
        <li>
          <a href="/">Link Shortening</a>
        </li>
        <li>
          <a href="/">Branded Links</a>
        </li>
        <li>
          <a href="/">Analytics</a>
        </li>
      </ul>
      <ul>
        <p>Resources</p>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Developers</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
      <ul>
        <p>company</p>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Our Team</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <div className="socials">
        <a href="/">
          <img src={facebook} alt="" />
        </a>
        <a href="/">
          <img src={instagram} alt="" />
        </a>
        <a href="/">
          <img src={twitter} alt="" />
        </a>
        <a href="/">
          <img src={pinterest} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
