import React from "react";
import styled from "styled-components";

const Separator = ({ blue }) => {
  return <SeparatorContainer blue={blue}></SeparatorContainer>;
};

const SeparatorContainer = styled.div`
  background: ${props => props.blue ? "#0070f3" : "#fff"};
  width: 100px;
  height: 10px;
  border-radius: 90px;
  margin-bottom: 20px;
  opacity: 0.8;
`;

export default Separator;
