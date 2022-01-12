// Import libraries
import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutContent from "../components/AboutContent";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import MemberCard from "../components/MemberCard";

// Import assets
import { memberList } from "../utils/data";
import wave from "../assets/illustrations/wave.svg";

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
          <Fade top cascade>
            <AboutTitle>
              We are <Blue>Interact Mass</Blue>
            </AboutTitle>
            <AboutDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AboutDesc>
          </Fade>
          <AboutContent isImageFirst={true} />
          <Fade top>
          <AboutTitle>
            Our <Blue>Values</Blue>
          </AboutTitle>
          <Separator />
          </Fade>
          <AboutContent isImageFirst={false} />
          <Fade>
          <AboutTitle>
            Our <Blue>Mission</Blue>
          </AboutTitle>
          <Separator />
          </Fade>
          <AboutContent isImageFirst={true} />
        </AboutWrapper>
      </AboutSection>
      <MembersSection>
        <Wave></Wave>
        <MembersWrapper>
          <Fade top>
            <AboutTitle>
              Meet Our <Blue>Team</Blue>
            </AboutTitle>
            <Separator />
          </Fade>
          <MemberCards>
            {memberList.map((e) => {
              return (
                <MemberCard
                  profilePic={e.profilePic}
                  name={e.name}
                  role={e.role}
                />
              );
            })}
          </MemberCards>
        </MembersWrapper>
      </MembersSection>
      <Footer />
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 10px 0px;

  @media screen and (max-width: 420px) {
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
`;

const MembersSection = styled.div`
  width: 100%;
  background-color: #ecf4fc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wave = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${wave});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const MembersWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1100px) {
    padding: 50px 0px;
  }
`;

const MemberCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 30px 0px;
`;

export default Aboutpage;
