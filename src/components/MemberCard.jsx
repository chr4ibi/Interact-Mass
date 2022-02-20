// Import libraries
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const MemberCard = ({ profilePic, name, role }) => {
  return (
    <CardContainer>
      <Fade bottom>
        <CardImgWrap>
          <CardImg src={profilePic}></CardImg>
          <CardOverlay>
            <CardName>{name}</CardName>
          </CardOverlay>
        </CardImgWrap>
        <CardTitle>{role}</CardTitle>
      </Fade>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
  width: 150px;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 150px;
  height: 150px;
  transition: 0.5s ease;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  z-index: 1000;
`;

const CardName = styled.h1`
  color: white;
  font-size: 18px;
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: 0.5s ease;
`;

const CardImgWrap = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${CardOverlay} {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:hover ${CardName} {
    opacity: 1;
  }
`;

const CardImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 1000px;
`;

const CardTitle = styled.h1`
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  margin: 15px 0px;
  color: #0070f3;
  text-align: center;
`;



export default MemberCard;
