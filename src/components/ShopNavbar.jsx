// Import libraries
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components"

// Import components
import LinkButton from './LinkButton'

const ShopNavbar = ({ dark, backPath }) => {
  return (
    <Navbar>
      <Menu>
        <LinkButton blue={true} to={backPath} text='GO BACK'/>
        <Buttons>
          <BasketValue dark={dark}>0 MAD</BasketValue>
          <ShoppingCartButton to="/shop/cart">
            <ShoppingCartIcon dark={dark}></ShoppingCartIcon>
          </ShoppingCartButton>
          <LoginButton to="/shop/login" dark={dark}>Login</LoginButton>
          <RegisterButton to="/shop/register" dark={dark}>Register</RegisterButton>
        </Buttons>
      </Menu>
    </Navbar>
  );
};

const Navbar = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const BasketValue = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: ${props => props.dark ? "#666" : "#eee"};
  opacity: 0.8;
  margin: 0px 10px;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const ShoppingCartButton = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
`;

const ShoppingCartIcon = styled(AiOutlineShoppingCart)`
  font-size: 32px;
  margin: 0px 10px;
  color: ${props => props.dark ? "#000" : "#fff"}
`;

const LoginButton = styled(LinkR)`
  margin: 0px 10px;
  font-size: 18px;
  color: ${props => props.dark ? "#000" : "#fff"}
`;

const RegisterButton = styled(LinkR)`
  margin: 0px 10px;
  font-size: 18px;
  color: ${props => props.dark ? "#000" : "#fff"}
`;

export default ShopNavbar;
