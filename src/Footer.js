import React from "react";
import Facebook from "./facebook.png";
import Instagram from "./Instagram.png";
import LinkedIn from "./LinkedIn.png";
import Twitter from "./twitter.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterText">
        <p>
          Vikirna Mediatek, S-297, UGF, Sahara Shopping Center, Faizabad Road
          LUCKNOW, UTTAR PRADESH 226016 INDIA | +91(941)265-2381
        </p>
      </div>
      <div className="SocialMedia">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={LinkedIn} alt="LinkedIn" />
        <img src={Twitter} alt="Twitter" />
      </div>
    </div>
  );
};
export default Footer;
