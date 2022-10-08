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
          <a aria-label="shortenlink" href="/">
            Link Shortening
          </a>
        </li>
        <li>
          <a aria-label="branded-links" href="/">
            Branded Links
          </a>
        </li>
        <li>
          <a aria-label="analytics" href="/">
            Analytics
          </a>
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
          <a aria-label="about" href="/">
            About
          </a>
        </li>
        <li>
          <a aria-label="out-team" href="/">
            Our Team
          </a>
        </li>
        <li>
          <a aria-label="carrers" href="/">
            Careers
          </a>
        </li>
        <li>
          <a aria-label="contact" href="/">
            Contact
          </a>
        </li>
      </ul>

      <div className="socials">
        <a aria-label="facebook-link" href="/">
          <img src={facebook} alt="" />
        </a>
        <a aria-label="instagram-link" href="/">
          <img src={instagram} alt="" />
        </a>
        <a aria-label="twitter-link" href="/">
          <img src={twitter} alt="" />
        </a>
        <a aria-label="pinterest-link" href="/">
          <img src={pinterest} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
