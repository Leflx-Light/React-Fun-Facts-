import React from "react";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="Logo not found!" />
        <h3 className="nav--logo_text">React Facts</h3>
        <h4 className="nav--title">20BCS3108 SONU Chandigarh University</h4>
      </nav>
    </>
  );
};

export default Navbar;
