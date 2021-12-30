import React, {useState} from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const Shoppage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ShopContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Shoppage;
