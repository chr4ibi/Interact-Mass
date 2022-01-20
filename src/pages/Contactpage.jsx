// Import libraries
import React, { useState} from "react";
import styled from 'styled-components'

// Import components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Contactpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ContactContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactSection>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactSubtitle>Any question or remarks ? Just write us a message !</ContactSubtitle>
        <ContactWrapper>

        </ContactWrapper>
      </ContactSection>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ContactSection = styled.div`

`

const ContactWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  
`

const ContactTitle = styled.h1`

`

const ContactSubtitle = styled.h2`

`

export default Contactpage;
