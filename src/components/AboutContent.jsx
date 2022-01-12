// Import libraries
import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'

// Import assets
import about1 from "../assets/illustrations/about1.svg";

const AboutContent = ({ isImageFirst }) => {
  return (
    <Container isImageFirst={isImageFirst}>
      <Image src={about1}></Image>
      <Fade right={isImageFirst} left={!isImageFirst} cascade>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. 
        <br></br>
        <br></br>
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. 
      </Paragraph>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  flex-direction: ${({isImageFirst}) => isImageFirst ? 'row' : 'row-reverse'};

  @media screen and (max-width: 1100px){
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

    @media screen and (max-width: 1100px){
        text-align: center;
    }
`;

export default AboutContent;
