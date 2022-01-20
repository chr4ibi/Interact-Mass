// Import libraries
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"

const ActionSection = ({ title, date, desc, images }) => {
  return (
    <Container>
      <Header>
        <Fade left>
        <ActionTitle>{title}</ActionTitle>
        </Fade>
        <Fade right>
        <ActionDate>{date}</ActionDate>
        </Fade>
      </Header>
      <Fade bottom>
      <ActionDesc>{desc}</ActionDesc>
      </Fade>
      <ImgWrapper>
        {images.map((e) => {
          return (
            <ImgLink>
            <Fade bottom>
              <Img bg={e}></Img>
              </Fade>
            </ImgLink>
          );
        })}
      </ImgWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionTitle = styled.h1`
  color: #0070f3;
  line-height: 1;
`;

const ActionDate = styled.h2`
  color: #666666;
  font-weight: 400;
`;

const ActionDesc = styled.p`
  text-align: justify;
  margin: 10px 0px;
  color: #000;
`;

const Img = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  height: 250px;

  transition: 0.3s;
  display: block;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: 0.3s;
  flex-wrap: wrap;

  &:hover ${Img} {
    filter: grayscale(1);
  }
`;

const ImgLink = styled.a`
  width: 24.5%;
  margin: 2px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;

  &:hover ${Img} {
    filter: grayscale(0);
  }

  @media screen and (max-width: 1200px) {
    width: 32.5%;
  }

  @media screen and (max-width: 900px) {
    width: 49%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default ActionSection;
