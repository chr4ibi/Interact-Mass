import React from "react";
import styled from "styled-components";

const Separator = () => {
  return <SeparatorContainer></SeparatorContainer>;
};

const SeparatorContainer = styled.div`
  background: rgb(1, 55, 80);
  background: linear-gradient(
    90deg,
    rgba(0, 118, 255, 0.9) 2%,
    rgba(100, 169, 233, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 100px;
  height: 10px;
  border-radius: 90px;
  opacity: 0.6;
  margin-bottom: 20px;
`;

export default Separator;
