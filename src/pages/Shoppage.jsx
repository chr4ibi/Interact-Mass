// import libraries
import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { AiOutlineShoppingCart } from "react-icons/ai";

// import components
import ProductCard from "../components/ProductCard";
import Separator from "../components/Separator";

// import assets
import { productList } from "../utils/data";

const Shoppage = () => {
  return (
    <ShopContainer>
      <ShopNavbar>
        <ShopMenu>
        <BackButton to="/">Go Back Home</BackButton>
        <ShopButtons>
          <BasketValue>0 MAD</BasketValue>
          <ShoppingCartButton to="/cart">
            <ShoppingCartIcon></ShoppingCartIcon>
          </ShoppingCartButton>
          <LoginButton to="./login">Login</LoginButton>
          <RegisterButton to="./register">Register</RegisterButton>
        </ShopButtons>
        </ShopMenu>
      </ShopNavbar>
      <ShopSection>
        <ShopWrapper>
          <Fade top>
            <ShopTitle>
              Our <Blue>Products</Blue>
            </ShopTitle>
            <Separator />
          </Fade>
          <ShopProducts>
            {productList.map((e) => {
              return (
                <ProductCard
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  sizes={e.sizes}
                  colors={e.colors}
                  images={e.images}
                />
              );
            })}
          </ShopProducts>
        </ShopWrapper>
      </ShopSection>
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopNavbar = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShopMenu = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackButton = styled(LinkR)`
  text-decoration: none;
  background-color: #64a9e9;
  color: #fff;
  padding: 5px 20px;
  border-radius: 90px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: #83baed;
    transition: 0.3s;
  }
`;

const ShopButtons = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const BasketValue = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #666;
  opacity: 0.8;
  margin: 0px 10px;
`;

const ShoppingCartButton = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
`

const ShoppingCartIcon = styled(AiOutlineShoppingCart)`
  font-size: 32px;
  margin: 0px 10px;
`;

const LoginButton = styled(LinkR)`
  margin: 0px 10px;
  font-size: 18px;
  color: #000;
`;

const RegisterButton = styled(LinkR)`
  margin: 0px 10px;
  font-size: 18px;
  color: #000;
`;

const ShopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ShopWrapper = styled.div`
  width: 90%;
  margin: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ShopTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 5px 0px;

  @media screen and (max-width: 420px) {
    font-size: 28px;
  }
`;

const Blue = styled.span`
  color: #64a9e9;
`;

const ShopProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

export default Shoppage;
