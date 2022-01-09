// Import libraries
import React, { useState } from "react";
import styled from "styled-components";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ActionSection from "../components/ActionSection";

// Import assets
import { actionList } from "../utils/data";

const Galerypage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <GaleryContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ActionsSection>
        <ActionsWrapper>
          {actionList.map((e) => {
            return <ActionSection title={e.title} date={e.date} desc={e.desc} images={e.images} />
          })}
        </ActionsWrapper>
      </ActionsSection>
      <Footer />
    </GaleryContainer>
  );
};

const GaleryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ActionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionsWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 150px;
`;

export default Galerypage;
