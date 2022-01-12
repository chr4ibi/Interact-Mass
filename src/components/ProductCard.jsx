// Import libraries
import React from "react";
import styled from "styled-components";

const ProductCard = ({ id, name, price, sizes, colors, images }) => {
  return (
    <CardContainer>
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

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  height: 450px;
  width: 100%;
  max-width: 400px;
  margin: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
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
`;

const CardPrice = styled.h2`
  color: #666;
  opacity: 0.8;
  font-weight: 400;
`;

const Color = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.bg};
    margin-right: 15px;
    border: 1px solid black;
`

export default ProductCard;
