import React from "react";
import styled from "styled-components";

const Separator = () => {
  return <SeparatorContainer></SeparatorContainer>;
};

const SeparatorContainer = styled.div`
  background-color: #64a9e9;
  width: 100px;
  height: 10px;
  border-radius: 90px;
  opacity: 0.6;
  margin-bottom: 20px;
`;

export default Separator;
