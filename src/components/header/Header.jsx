import React from "react";
import "./header.css";
import CTA from "../CTA";
import Jayesh from "../../assets/Jayesh.jpg";
import Headersocials from "../HeaderSocioal";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>JAYESH PANDAV</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Headersocials />

        <div className="me">
          <img src={Jayesh} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
