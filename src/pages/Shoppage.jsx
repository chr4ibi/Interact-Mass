// import libraries
import React, { useState } from "react";
import styled from "styled-components";

// import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from '../components/ProductCard'
import Separator from '../components/Separator'

// import assets
import { productList } from "../utils/data";


const Shoppage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ShopContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ShopSection>
        <ShopWrapper>
          <ShopHeader></ShopHeader>
          <ShopTitle>Our <Blue>Products</Blue></ShopTitle>
          <Separator />
          <ShopProducts>
            { productList.map((e) => {
              return <ProductCard id={e.id} name={e.name} price={e.price} sizes={e.sizes} colors={e.colors} images={e.images} />
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
`;

const ShopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ShopHeader = styled.div`
  height: 50px;
  width: 100%;
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
