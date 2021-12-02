import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
// https://github.com/briancodex/react-navbar-v3/tree/main/src
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Menu" activeStyle>
            Menu
          </NavLink>
          <NavLink to="/Cart" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
