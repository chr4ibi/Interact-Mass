// Import libraries
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Import assets
import homebg from "../assets/images/homebg.jpeg";
import aboutimage from "../assets/images/aboutimage.jpeg";
import galery1 from '../assets/images/galery1.jpeg'
import galery2 from '../assets/images/galery2.jpeg'
import galery3 from '../assets/images/galery3.jpeg'
import sweatshirt from '../assets/images/sweatshirt.jpeg'



const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isBlack={false} />
      <HeroSection>
        <HeroWrapper>
          <HeroTitle>Interact Mass</HeroTitle>
          <HeroDesc>Together for a better world</HeroDesc>
          <HeroButton>Read more</HeroButton>
        </HeroWrapper>
      </HeroSection>
      <AboutSection>
        <AboutWrapper>
          <AboutImage></AboutImage>
          <AboutContent>
            <AboutTitle>Who we are</AboutTitle>
            <AboutSeparator></AboutSeparator>
            <AboutParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br></br>
              <br></br>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </AboutParagraph>
            <AboutButton to="/about">Read More</AboutButton>
          </AboutContent>
        </AboutWrapper>
      </AboutSection>
      <ActionSection>
        <ActionWrapper>
          <ActionTitle>What we do</ActionTitle>
          <ActionSeparator></ActionSeparator>
          <ActionContent>
            <ActionCard>
              <ActionCardImage1></ActionCardImage1>
              <ActionCardTitle>Lorem Ipsum</ActionCardTitle>
              <ActionCardDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ActionCardDesc>
            </ActionCard>
            <ActionCard>
              <ActionCardImage2></ActionCardImage2>
              <ActionCardTitle>Lorem Ipsum</ActionCardTitle>
              <ActionCardDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ActionCardDesc>
            </ActionCard>
            <ActionCard>
              <ActionCardImage3></ActionCardImage3>
              <ActionCardTitle>Lorem Ipsum</ActionCardTitle>
              <ActionCardDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ActionCardDesc>
            </ActionCard>
          </ActionContent>
          <ActionButton to='/galery'>Go to Galery</ActionButton>
        </ActionWrapper>
      </ActionSection>
      <ShopSection>
        <ShopWrapper>
          <ShopContent>
            <ShopTitle>How you can help</ShopTitle>
            <ShopSeparator></ShopSeparator>
            <ShopParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br></br>
              <br></br>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </ShopParagraph>
            <ShopButton to='/shop'>Go to Shop</ShopButton>
          </ShopContent>
          <ShopImage></ShopImage>
        </ShopWrapper>
      </ShopSection>
      <Footer>
        <FooterText>
          Copyright 2021 All Rights Reserved Interact Mass{" "}
        </FooterText>
      </Footer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${homebg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.4;
  }
`;

const HeroWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 72px;
  line-height: 1;

  @media screen and (max-width: 1000px) {
    text-align: center;
    font-size: 64px;
  }

  @media screen and (max-width: 500px) {
    font-size: 44px;
  }
`;

const HeroDesc = styled.p`
  color #fff;
  font-size: 48px;

  @media screen and (max-width: 1000px) {
    text-align: center;
    font-size: 32px;
  };

  @media screen and (max-width: 500px) {
    font-size: 24px;
    margin: 5px 0px;
  }
`;

const HeroButton = styled.button`
  border: none;
  background-color: #64a9e9;
  padding: 5px 40px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #64a9e9;
    transition: 0.2s;
  }
`;

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 100px 0px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutImage = styled.div`
  height: 350px;
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  background-image: url(${aboutimage});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
`;

const AboutContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: 100px;

  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    max-width: 400px;
    margin-top: 30px;
  }
`;

const AboutTitle = styled.h1`
  font-size: 32px;
  line-height: 1;
  margin-bottom: 20px;
`;

const AboutSeparator = styled.div`
  background-color: #64a9e9;
  width: 100px;
  height: 10px;
  border-radius: 90px;
  opacity: 0.6;
  margin-bottom: 20px;
`;

const AboutParagraph = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  font-size: 16px;
`;

const AboutButton = styled(Link)`
  border: none;
  background-color: #64a9e9;
  padding: 5px 40px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionTitle = styled.h1`
  font-size: 32px;
  line-height: 1;
  margin-bottom: 20px;
`;

const ActionSeparator = styled.div`
  background-color: #64a9e9;
  width: 100px;
  height: 10px;
  border-radius: 90px;
  opacity: 0.6;
`;

const ActionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 100%;
  max-width: 400px;
`;

const ActionCardImage1 = styled.div`
  background-image: url(${galery1});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
`;

const ActionCardImage2 = styled.div`
  background-image: url(${galery2});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
`;

const ActionCardImage3 = styled.div`
  background-image: url(${galery3});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
`;

const ActionCardTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;

const ActionCardDesc = styled.p`
  text-align: center;
  font-size: 16px;
`;

const ActionButton = styled(Link)`
  border: none;
  background-color: #64a9e9;
  padding: 5px 40px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
`;

const ShopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShopWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 100px 0px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ShopContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-right: 100px;

  @media screen and (max-width: 1000px) {
    margin-right: 0px;
    max-width: 400px;
    margin-bottom: 30px;
  }
`;

const ShopTitle = styled.h1`
  font-size: 32px;
  line-height: 1;
  margin-bottom: 20px;
`;

const ShopSeparator = styled.div`
  background-color: #64a9e9;
  width: 100px;
  height: 10px;
  border-radius: 90px;
  opacity: 0.6;
  margin-bottom: 20px;
`;

const ShopParagraph = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  font-size: 16px;
`;

const ShopButton = styled(Link)`
  border: none;
  background-color: #64a9e9;
  padding: 5px 40px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
`;

const ShopImage = styled.div`
  height: 350px;
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  background-image: url(${sweatshirt});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #64a9e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

export default Homepage;