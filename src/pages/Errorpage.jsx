// Import libraries
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Import components
import Button from "../components/LinkButton";

// Import assets
import errorImg from "../assets/illustrations/404error.svg";


const Errorpage = () => {
  return (
    <ErrorContainer>
      <ErrorWrapper>
        <Fade>
          <ErrorContent>
            <ErrorTitle>OOPS, PAGE NOT FOUND.</ErrorTitle>
            <ErrorSubtitle>
              Sorry, it seems like something is going wrong. The page you're
              looking for doesn't exist. If you think something is broken,
              report a problem.
            </ErrorSubtitle>
            <ErrorButtons>
              <Button text='VISIT HOME' to='/' blue={true} sideMargin={true}/>
              <Button text='REPORT A PROBLEM' to='/contact' blue={true}/>
            </ErrorButtons>
          </ErrorContent>
        </Fade>
        <ErrorImage src={errorImg}></ErrorImage>
      </ErrorWrapper>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const ErrorImage = styled.img`
  width: 100%;
  max-width: 600px;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const ErrorTitle = styled.h1`
  font-size: 56px;
  line-height: 1;
  margin: 10px 0px;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    font-size: 48px;
  }

  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;

const ErrorSubtitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin: 10px 0px;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const ErrorButtons = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Errorpage;
