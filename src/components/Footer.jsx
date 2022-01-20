// Import libraries
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Copyright 2021 All Rights Reserved Interact Mass</FooterText>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0070f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

export default Footer
