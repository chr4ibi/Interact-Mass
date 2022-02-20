// Import libraries
import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

// Import components
import LinkButton from "../components/LinkButton";
import Announcement from "../components/Announcement";

const ComingSoon = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <Fade top>
          <Loader>
            <InnerOne></InnerOne>
            <InnerTwo></InnerTwo>
            <InnerThree></InnerThree>
          </Loader>
        </Fade>
        <Fade top>
          <Title>COMING SOON</Title>
        </Fade>
        <Fade bottom>
          <Message>
            This section is still in production please come back later.
          </Message>
        </Fade>
        <Fade bottom>
          <LinkButton blue={true} to="/" text="BACK HOME" />
        </Fade>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #fdfdfd;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div`
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
  margin: 20px 0px;
`;

const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const rotateTwo = keyframes`
0% {
  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
}
100% {
  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
}
`;

const rotateThree = keyframes`
0% {
  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
}
100% {
  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
}
`;

const InnerOne = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 3px solid #0070f3;
`;

const InnerTwo = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 3px solid #0070f3;
`;

const InnerThree = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 3px solid #0070f3;
`;

const Title = styled.h1`
  color: #0070f3;
  text-align: center;
  font-size: 32px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 24px;
  color: #303030;
  margin-bottom: 10px;

  @media screen and (max-width: 500px){
    font-size: 22px;
  }
`;

export default ComingSoon;
