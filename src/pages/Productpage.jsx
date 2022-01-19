// Import libraries
import React from "react";
import styled from "styled-components";

// Import components
import ShopNavbar from "../components/ShopNavbar";
import Button from '../components/Button'

// Import assets
import img from "../assets/images/brownsweat1.jpeg";

const Productpage = () => {
  return (
    <ProductContainer>
      <ShopNavbar dark={true} backPath="/shop" />
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
            <Button blue={true} text='Add To Cart'/>
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

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
  }
`;

const ProductImage = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 150px;
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    margin: 10px 5px;
  }

  @media screen and (max-width: 600px) {
    width: 125px;
    height: 125px;
  }

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

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

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const ProductName = styled.h1`
  font-size: 32px;
  margin: 10px 0px;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

const ProductPrice = styled.h2`
  color: #666;
  opacity: 0.8;
  font-size: 32px;
  font-weight: 400;
  margin: 10px 0px;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

const ProductSizeText = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0px;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
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

  @media screen and (max-width: 1200px) {
    margin: 0px 10px;
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

  @media screen and (max-width: 1200px) {
    margin: 0px 10px;
  }
`;


export default Productpage;
