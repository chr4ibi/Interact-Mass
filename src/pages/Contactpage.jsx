import React, { useState} from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const Contactpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ContactContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Contactpage;