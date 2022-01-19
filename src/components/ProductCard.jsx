// Import libraries
import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const ProductCard = ({ id, name, price, sizes, colors, images }) => {
  return (
    <CardContainer to="./product">
      <CardImage bg={images[0]}></CardImage>
      <CardHeader>
        <CardName>{name}</CardName>
        <CardPrice>{price} MAD</CardPrice>
      </CardHeader>
      <CardColors>
        <Color bg={colors[0]}></Color>
        <Color bg={colors[1]}></Color>
      </CardColors>
    </CardContainer>
  );
};

const CardContainer = styled(LinkR)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  height: 450px;
  width: 100%;
  max-width: 380px;
  margin: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 80%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-color: #666;
  border-radius: 15px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardColors = styled.div`
  display: flex;
`;

const CardName = styled.h1`
  font-size: 24px;
  margin: 10px 0px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const CardPrice = styled.h2`
  color: #666;
  opacity: 0.8;
  font-weight: 400;
  font-size: 24px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.bg};
  margin-right: 15px;
  border: 1px solid black;
`;

export default ProductCard;
