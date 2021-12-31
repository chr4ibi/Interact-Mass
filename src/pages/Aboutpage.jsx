// Import libraries
import React, { useState } from "react";
import styled from "styled-components";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutContent from "../components/AboutContent";
import Separator from '../components/Separator'

const Aboutpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AboutContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutSection>
        <AboutWrapper>
          <AboutTitle>We are <Blue>Interact Mass</Blue></AboutTitle>
          <AboutDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AboutDesc>
          <AboutContent />

          <AboutTitle>Our <Blue>Values</Blue></AboutTitle>
          <Separator />
          <AboutContent />

          <AboutTitle>Our <Blue>Mission</Blue></AboutTitle>
          <Separator />
          <AboutContent />
        </AboutWrapper>
      </AboutSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const AboutSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const AboutTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 5px 0px;

  @media screen and (max-width: 420px){
    font-size: 28px;
  }
`;

const AboutDesc = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 450px;
`;

const Blue = styled.span`
  color: #64a9e9;
`

export default Aboutpage;
