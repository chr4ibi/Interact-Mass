// Import libraries
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Import assets
import Separator from "./Separator";

const AboutContent = ({ isImageFirst, text, image, title, separator }) => {
  return (
    <>
      <Fade top>
        <Title>{title}</Title>
      </Fade>
      <Fade top>
        { separator ? <Separator blue={true}/> : "" }
      </Fade>
      <Container isImageFirst={isImageFirst}>
        <Image src={image}></Image>
        <Fade right={isImageFirst} left={!isImageFirst} cascade>
          <Paragraph>
            {text.p1}
            <br></br>
            <br></br>
            {text.p2}
            <br></br>
            <br></br>
            {text.p3}
          </Paragraph>
        </Fade>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  flex-direction: ${({ isImageFirst }) =>
    isImageFirst ? "row" : "row-reverse"};

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 600px;
  margin: 0px 20px;

  @media screen and (max-width: 1100px) {
    text-align: center;
    margin: 0px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 10px 0px;

  @media screen and (max-width: 420px) {
    font-size: 28px;
  }
`;


export default AboutContent;
