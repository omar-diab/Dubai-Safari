import "./Footer.css";

import { languages, currencies } from "../../data";
import SelectBox from "./SelectBox";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item select-box-wrapper">
        <Logo />
        <SelectBox items={languages} label="Language" />
        <SelectBox items={currencies} label="Currencies" />
      </div>
      <div className="footer-item">
        <h3 className="footer-title">Support</h3>
        <ul className="footer-list">
          <li className="footer-link">Contact</li>
          <li className="footer-link">Legal Notice</li>
          <li className="footer-link">Privacy Policy</li>
          <li className="footer-link">Sitemap</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3 className="footer-title">Company</h3>
        <ul className="footer-list">
          <li className="footer-link">About Us</li>
          <li className="footer-link">Careers</li>
          <li className="footer-link">Blog Policy</li>
          <li className="footer-link">Press</li>
          <li className="footer-link">Gift Cards</li>
          <li className="footer-link">Magazine</li>
          <li className="footer-link">Travel Giudes</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3 className="footer-title">Work With Us</h3>
        <ul className="footer-list">
          <li className="footer-link">Become a supplier</li>
          <li className="footer-link">Become a affiliate partner</li>
        </ul>
        <div className="footer-icons">
          <div className="footer-icon">
            <i className="bi bi-instagram"></i>
          </div>
          <div className="footer-icon">
            <i className="bi bi-facebook"></i>
          </div>
          <div className="footer-icon">
            <i className="bi bi-twitter-x"></i>
          </div>
          <div className="footer-icon">
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
        <div className="footer-end">
          <p className="footer-copyright">
           <span>&copy;</span> 2024 <span>Dubai Desert Safari</span>. All rights reserved.
          </p>
          <p className="footer-terms">Terms and Conditions <span>|</span> Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
