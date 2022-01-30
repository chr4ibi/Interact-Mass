// Import libraries
import React from "react";
import styled from "styled-components";

// Import components
import ShopNavbar from "../components/ShopNavbar";

// Import assets
import blacksweat1 from "../assets/images/blacksweat1.jpeg";

const Cartpage = () => {
  return (
    <CartContainer>
      <ShopNavbar btnBlue={true} dark={true} backPath="/shop" />
      <CartSection>
        <CartTitle>
          Let's complete your <Blue>order</Blue>, shall we ?
        </CartTitle>
        <CartWrapper>
          <Infos>
            
          </Infos>
          <Summary>summary</Summary>
        </CartWrapper>
      </CartSection>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  background: #fdfdfd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartSection = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTitle = styled.h1`
  font-size: 32px;
  margin: 10px 0px;
  text-align: center;
`;

const Blue = styled.span`
  color: #0070f3;
`;

const CartWrapper = styled.div`
  height: 600px;
  width: 100%;
  margin: 20px 0px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Infos = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
`;

export default Cartpage;
