// Import libraries
import React from "react";
import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

// Import components
import Separator from "../components/Separator";
import Button from '../components/Button'
import ShopNavbar from "../components/ShopNavbar";


const Loginpage = () => {
  return (
    <Container>
      <ShopNavbar dark={false} backPath="/shop"/>
      <Wrapper>
        <Title>Login to your account</Title>
        <Separator />
        <Form>
          <EmailSection>
            <EmailIcon></EmailIcon>
            <Input placeholder="Email" />
          </EmailSection>
          <PasswordSection>
            <PasswordIcon></PasswordIcon>
            <Input placeholder="Password" />
          </PasswordSection>
          <Button text="LOGIN" blue={true} />
          <Link to='/shop/register'>DON'T YOU REMEMBER THE PASSWORD ?</Link>
          <Link to='/shop/register'>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(1, 55, 80);
  background: linear-gradient(
    90deg,
    rgba(1, 55, 80, 1) 2%,
    rgba(100, 169, 233, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin-top: 150px;
`;
const Title = styled.form`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailSection = styled.div`
  display: flex;
  align-items: center;
`;

const PasswordSection = styled.div`
  display: flex;
  align-items: center;
`;

const EmailIcon = styled(MdEmail)`
  font-size: 32px;
`;

const PasswordIcon = styled(FaLock)`
  font-size: 32px;
`;

const Input = styled.input`
  width: 320px;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  margin: 10px;

  @media screen and (max-width: 500px) {
    width: 260px;
  }
`;

const Link = styled(LinkR)`
  color: #000;
  text-decoration: none;
  margin: 5px 0px;

  &:hover {
    text-decoration: underline;
  }
`

export default Loginpage;
