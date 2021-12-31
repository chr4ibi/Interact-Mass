import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Navbar = ({ toggle, isBlack }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo isBlack={isBlack} scrollNav={scrollNav} to="/">
            Interact
          </NavLogo>
          <MobileIcon isBlack={isBlack} scrollNav={scrollNav} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink scrollNav={scrollNav} isBlack={isBlack} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink scrollNav={scrollNav} isBlack={isBlack} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink scrollNav={scrollNav} isBlack={isBlack} to="/galery">
                Galery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink scrollNav={scrollNav} isBlack={isBlack} to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavShopLink isBlack={isBlack} scrollNav={scrollNav} to="/shop">
              Shop
            </NavShopLink>
            <NavDonateLink to='/donate' scrollNav={scrollNav} isBlack={isBlack}> 
              Donate
            </NavDonateLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#64A9E9" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.2s all ease;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  color: ${({ isBlack }) => (isBlack ? ({ scrollNav }) => (scrollNav ? "#fff" : "#000") : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ isBlack }) => (isBlack ? ({ scrollNav }) => (scrollNav ? "#fff" : "#000") : "#fff")};
  }
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(LinkR)`
  color: ${({ isBlack }) => (isBlack ? ({ scrollNav }) => (scrollNav ? "#fff" : "#000") : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#64A9E9")};
    transition: 0.2s;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavShopLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ isBlack }) => (isBlack ? ({ scrollNav }) => (scrollNav ? "#fff" : "#000") : "#fff")};
  white-space: nowrap;
  padding: 5px 20px;
  color: ${({ isBlack }) => (isBlack ? ({ scrollNav }) => (scrollNav ? "#000" : "#fff") : "#000")};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ scrollNav }) => (scrollNav ? "#000" : "#64A9E9")};
    color: #fff;
  }
`;

const NavDonateLink = styled(LinkR)`
  font-size: 16px;
  color: ${({ isBlack }) => (isBlack ? ({ scrollNav }) => (scrollNav ? "#fff" : "#000") : "#fff")};
  text-decoration: underline;

  &:hover {
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#64A9E9")};
  }
`

export default Navbar;
