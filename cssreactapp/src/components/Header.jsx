import React from "react";
import "./style/Header.css";
import logo from "./images/logo.png";
import logo2 from "./images/cloug-guru-logo.svg";
const Header = () => {
  return (
    <div className="mainheader">
      <div className="hederdiv1">
        <img src={logo} className="logoimg" />
        <div className="headermenu">
          <div className="headerdiv2">
            <p>Pluralsight</p>
            <p>Skills</p>
            <p> A Cloud Guru</p>
            <p> Flow</p>
            <p> Blog</p>
            <div className="linediv"></div>
          </div>
          <div className="signindiv1">
            <div>
              <i class="fa-solid fa-user user"></i>
            </div>
            <p>
              sign in <i class="fa-solid fa-chevron-down"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="heder2">
      <div className="heder2div1">
        <img src={logo2} alt="Your SVG" className="logoimg2"/>
        <div className="heder2div2">
          <p>Why ACG? </p>
          <p>Courses </p>
          <p>Plans </p>
          <p>For individuals </p>
        </div>
      </div>
      <div className="header2div3">
      <i class="fa-solid fa-magnifying-glass"></i>
        <div className="Contact">Contact Sales</div>
      <div className="try">Try for free</div>
      
      </div>
      </div>
    </div>
  );
};

export default Header;
