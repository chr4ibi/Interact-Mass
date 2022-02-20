// Import libraries
import React from 'react';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

const Announcement = () => {
  return (
  <Container>
    <Text>IF YOU REALLY WANNA BUY OUR SWEATS OR DONATE, PLEASE <Link to="/contact">CONTACT US</Link></Text>
  </Container>
  )
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background-color: #303030;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Text = styled.h1`
  font-weight: 500;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 500px){
    font-size: 16px;
  }
`

const Link = styled(LinkR)`
  color: #0070f3;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
  }
`



export default Announcement;
