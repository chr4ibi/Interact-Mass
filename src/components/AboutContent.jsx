// Import libraries
import React from "react";
import styled from "styled-components";

// Import assets
import about1 from "../assets/illustrations/about1.svg";

const AboutContent = () => {
  return (
    <Container>
      <Image src={about1}></Image>
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
        <br></br>
        <br></br>
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  align-items: center;

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
