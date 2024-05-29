import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="flex justify-center flex-wrap">
      <div className="who-are-we">
        <h3>Who are we?</h3>
        <p>
          We at Looks Maxx strive to give you every push you need to get to
          those dreams! Putting on gear that not only offers enhanced
          performance but gives you the confidence to show up each day, every
          day - that is what we dedicate our entire energies in!
        </p>
      </div>
      <div>
        <h3>Categories</h3>
        <ul>
          <li>Shirts</li>
          <li>Pants</li>
          <li>Inner wear</li>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>

          <li className="flex  items-center">
            <span className="material-symbols-rounded">call</span> 9067702053
          </li>
          <li className="flex  items-center">
            <span class="material-symbols-rounded">mail</span>
            support@looksmaxx.com
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
