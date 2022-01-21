// import libraries
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// import components
import ProductCard from "../components/ProductCard";
import Separator from "../components/Separator";

// import assets
import { productList } from "../utils/data";
import ShopNavbar from "../components/ShopNavbar";

const Shoppage = () => {
  return (
    <ShopContainer>
      <ShopNavbar btnBlue={true} dark={true} backPath="/"/>
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
  background-color: #fff;
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
  color: #0070f3;
`;

const ShopProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

export default Shoppage;
