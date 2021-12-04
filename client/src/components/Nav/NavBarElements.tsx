import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  margin-left: 25%;
  margin-right: 25%;
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  font-size: 20px;
  cursor: pointer;
  padding-left: 3rem;
  padding-right: 3rem;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #f7f574;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f7f574;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f7f574;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
`;
