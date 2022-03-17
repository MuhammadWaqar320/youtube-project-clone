import React from "react";
import "./navbar.css";
import NavBarLeft from "./navBarLeft";
import NavBarMid from "./navBarMid";
import NavBarRight from "./navBarRight";
const Navbar = () => {
  return(
    <div>
      <nav className="nav-bar">
        <NavBarLeft/>
        <NavBarMid/>
        <NavBarRight/>
      </nav>
    </div>
  );
};
export default Navbar;
