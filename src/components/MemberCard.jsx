// Import libraries
import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'

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
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`;

const CardImgWrap = styled.div`
  width: 150px;
  position: relative;
  cursor: pointer;
  border-radius: 1000px;

  &:hover ${CardOverlay} {
    opacity: 0.6;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;

const CardTitle = styled.h1`
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  margin: 15px 0px;
  color: #0070f3;
`;

const CardName = styled.h1`
  color: white;
  font-size: 18px;
  position: absolute;
  text-align: center;
`;

export default MemberCard;
