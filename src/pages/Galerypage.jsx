// Import libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ActionSection from "../components/ActionSection";

// Import assets
import { getActions } from "../utils/api";

const Galerypage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [actions, setActions] = useState([])

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const fetchData = async () => {
    const data = await getActions() || []
    setActions(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <GaleryContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ActionsSection>
        <ActionsWrapper>
          {actions.map((e) => {
            return <ActionSection title={e.title} date={e.date} images={e.images} />
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
  background: #fdfdfd;
`;

const ActionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ActionsWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 150px;
`;

export default Galerypage;
