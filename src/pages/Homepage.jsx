// Import libraries
import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";

// Import assets
import homebg from "../assets/images/homebg.jpeg";
import aboutimage from "../assets/images/aboutimage.jpeg";
import galery1 from "../assets/images/galery1.jpeg";
import galery2 from "../assets/images/galery2.jpeg";
import galery3 from "../assets/images/galery3.jpeg";
import sweatshirt from "../assets/images/sweatshirt.jpeg";

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
          <Fade bottom>
            <HeroContent>
              <HeroTitle>Interact Mass</HeroTitle>
              <HeroDesc>Together for a better world</HeroDesc>
              <LinkButton to="/about" blue={true} text="DISCOVER" />
            </HeroContent>
          </Fade>
        </HeroWrapper>
      </HeroSection>
      <AboutSection id="about">
        <AboutWrapper>
          <AboutImage src={aboutimage}></AboutImage>
          <Fade right>
            <AboutContent>
              <AboutTitle>Who we are</AboutTitle>
              <Separator blue={true} />
              <AboutParagraph>
                We are Interact Mass, a group of <Highlight>teenagers</Highlight> trying to make the
                world a better place at our scale. We’re all from the same high
                school and we do <Highlight>charity</Highlight> actions every week.
                <br></br>
                <br></br>
                Wanna know about us more in depth ? Discover our <Highlight>values</Highlight>, our <Highlight>goals</Highlight> and our <Highlight>team</Highlight> by clicking the button below.
              </AboutParagraph>
              <LinkButton to="about" text="LEARN ABOUT US" blue={true} />
            </AboutContent>
          </Fade>
        </AboutWrapper>
      </AboutSection>
      <ActionSection>
        <ActionWrapper>
          <Fade top>
            <ActionTitle>What we do</ActionTitle>
            <Separator blue={true} />
          </Fade>
          <ActionContent>
            <Fade left>
              <ActionCard>
                <ActionCardImage1></ActionCardImage1>
                <ActionCardTitle>Basket Distribution</ActionCardTitle>
                <ActionCardDesc>
                  We distribute baskets of <Highlight>first necessity products</Highlight> such as food, water, clothes, and other things to <Highlight>homeless people</Highlight>.
                </ActionCardDesc>
              </ActionCard>
            </Fade>
            <Fade>
              <ActionCard>
                <ActionCardImage2></ActionCardImage2>
                <ActionCardTitle>Public Renovation</ActionCardTitle>
                <ActionCardDesc>
                  Once a year, we collect money to <Highlight>renovate</Highlight> a moroccan <Highlight>public establishment</Highlight> in need such as schools, hospitals, etc...
                </ActionCardDesc>
              </ActionCard>
            </Fade>
            <Fade right>
              <ActionCard>
                <ActionCardImage3></ActionCardImage3>
                <ActionCardTitle>Free Tutoring</ActionCardTitle>
                <ActionCardDesc>
                  Every week, we give <Highlight>private classes</Highlight> to elementary students from the "Heure Joyeuse" organization who need help for their homework.
                </ActionCardDesc>
              </ActionCard>
            </Fade>
          </ActionContent>
          <Fade bottom>
            <LinkButton to="/galery" text="GO TO GALERY" blue={true} />
          </Fade>
        </ActionWrapper>
      </ActionSection>
      <ShopSection>
        <ShopWrapper>
          <Fade left>
            <ShopContent>
              <ShopTitle>How you can help</ShopTitle>
              <Separator blue={true} />
              <ShopParagraph>
                You're at Louis Massignon high school and you want to join our organization ? Unfortunately, <Highlight>recruitements are closed</Highlight> for the moment but we encourage you to apply next year.
                <br></br>
                <br></br>
                If you don't want to join the organization but still want to <Highlight>engage yourself</Highlight>, you can help by <Highlight>donating money</Highlight> or <Highlight>buying our sweatshirts</Highlight>.
              </ShopParagraph>
              <LinkButton to="/shop" text="GO TO SHOP" blue={true} />
            </ShopContent>
          </Fade>
          <ShopImage></ShopImage>
        </ShopWrapper>
      </ShopSection>
      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fdfdfd;
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
    height: 100vh;
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

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 40px;
  line-height: 1;
  margin: 5px 0px;

  @media screen and (max-width: 1000px) {
    text-align: center;
    font-size: 32px;
  };

  @media screen and (max-width: 500px) {
    font-size: 24px;
    margin: 5px 0px;
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

const AboutParagraph = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  font-size: 18px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #0070f3;
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

const ActionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

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
  margin-bottom: 5px;
`;

const ActionCardDesc = styled.p`
  text-align: center;
  font-size: 18px;
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

const ShopParagraph = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  font-size: 18px;
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

export default Homepage;
