import React from "react";
import styled from "styled-components";

const Separator = () => {
  return <SeparatorContainer></SeparatorContainer>;
};

const SeparatorContainer = styled.div`
  background: #0070f3;
  width: 100px;
  height: 10px;
  border-radius: 90px;
  margin-bottom: 20px;
  opacity: 0.6;
`;

export default Separator;
