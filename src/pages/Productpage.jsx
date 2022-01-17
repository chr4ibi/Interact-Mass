// Import libraries
import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Import assets
import img from "../assets/images/brownsweat1.jpeg";

const Productpage = () => {
  return (
    <ProductContainer>
      <ShopNavbar>
        <ShopMenu>
          <BackButton to="/shop">Go Back</BackButton>
          <ShopButtons>
            <BasketValue>0 MAD</BasketValue>
            <ShoppingCartButton to="/cart">
              <ShoppingCartIcon></ShoppingCartIcon>
            </ShoppingCartButton>
            <LoginButton to="/shop/login">Login</LoginButton>
            <RegisterButton to="/shop/register">Register</RegisterButton>
          </ShopButtons>
        </ShopMenu>
      </ShopNavbar>
      <ProductSection>
        <ProductWrapper>
          <ProductImages>
              <ProductImage bgimg={img}></ProductImage>
              <ProductImage bgimg={img}></ProductImage>
              <ProductImage bgimg={img}></ProductImage>
          </ProductImages>
          <ProductCarousel bgimg={img}></ProductCarousel>
          <ProductContent>
            <ProductName>Lorem Ipsum</ProductName>
            <ProductPrice>250 MAD</ProductPrice>
            <ProductSizeText>Sizes</ProductSizeText>
            <ProductSizeButtons>
              <ProductSize>Small</ProductSize>
              <ProductSize>Medium</ProductSize>
            </ProductSizeButtons>
            <ProductColorsText>Colors</ProductColorsText>
            <ProductColors>
              <ProductColor></ProductColor>
              <ProductColor></ProductColor>
            </ProductColors>
            <AddToCardButton>Add To Cart</AddToCardButton>
          </ProductContent>
        </ProductWrapper>
      </ProductSection>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
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
`;

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
`;

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

const ProductSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  margin: 100px 0px;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`

const ProductImage = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
`

const ProductCarousel = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-position: center;
  background-size: cover;
  height: 600px;
  width: 100%;
  max-width: 600px;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ProductName = styled.h1`
  font-size: 32px;
  margin: 10px 0px;
`;

const ProductPrice = styled.h2`
  color: #666;
  opacity: 0.8;
  font-size: 32px;
  font-weight: 400;
  margin: 10px 0px;
`;

const ProductSizeText = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0px;
`;

const ProductSizeButtons = styled.div`
  margin: 10px 0px;
`;

const ProductSize = styled.button`
  background-color: #fff;
  border: 1px solid black;
  width: 100px;
  height: 50px;
  font-size: 18px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    transition: 0.3s;
  }
`;

const ProductColorsText = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0px;
`;

const ProductColors = styled.div`
  margin: 10px 0px;
  display: flex;
`;

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid black;
  margin-right: 20px;
`;

const AddToCardButton = styled.button`
  border: none;
  background-color: #64a9e9;
  color: #fff;
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: #83baed;
  }
`;

export default Productpage;
