// Import libraries
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Copyright 2021 | All Rights Reserved | Interact Mass</FooterText>
            <FooterText>Made with heart by <PortfolioLink target="_blank" href="https://www.alichraibi.tech/">chr4ibi</PortfolioLink></FooterText>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
  width: 100%;
  background-color: #0070f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 5px 0px;
`;

const PortfolioLink = styled.a`
  color: pink;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  

  &:hover {
    text-decoration: underline;
    transition: ease-in-out 0.3s;
    color: #000;
  }
`

export default Footer
