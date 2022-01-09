// Import libraries
import React from "react";
import styled from "styled-components";

const ActionSection = ({ title, date, desc, images }) => {
  return (
    <Container>
      <Header>
        <ActionTitle>{title}</ActionTitle>
        <ActionDate>{date}</ActionDate>
      </Header>
      <ActionDesc>{desc}</ActionDesc>
      <ImgWrapper>
        {images.map((e) => {
          return (
            <ImgLink>
              <Img bg={e}></Img>
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
  margin-bottom: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionTitle = styled.h1`
  color: #64a9e9;
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