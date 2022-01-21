// Import libraries
import React from "react";
import styled from "styled-components";

const Button = ({ text, blue }) => {
  return <ButtonContainer blue={blue}>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  margin: 20px 0px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background-color: ${(props) => props.blue ? '#0070f3' : '#fff'};
  color: ${(props) => props.blue ? '#fff' : '#696969'};
  font-weight: 400;
  font-size: 16px;
  box-shadow: ${(props) => props.blue ? "0 4px 14px 0 rgb(0 118 255 / 39%)" : "0 4px 14px 0 rgb(0 0 0 / 10%)"};
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    background: ${(props) => props.blue ? "rgba(0, 118, 255, 0.9)" : "rgba(255,255,255,0.9)"};
    box-shadow: ${(props) => props.blue ? "0 6px 20px rgb(0 118 255 / 23%)" : "0 6px 20px rgb(93 93 93 / 23%)"};
  }
`;


// display: inline-block;
// outline: 0;
// cursor: pointer;
// border: none;
// padding: 0 56px;
// height: 45px;
// line-height: 45px;
// border-radius: 7px;
// font-weight: 400;
// font-size: 16px;
// background: #fff;
// color: ;
// box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
// transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
// :hover{
//     background: rgba(255,255,255,0.9);
//     box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
// }


export default Button;
