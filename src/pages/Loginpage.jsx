// Import libraries
import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

// Import components
import Separator from "../components/Separator";
import ActionButton from "../components/ActionButton";
import ShopNavbar from "../components/ShopNavbar";

const Loginpage = () => {
  return (
    <Container>
      <ShopNavbar dark={true} backPath="/shop" btnBlue={true} />
      <Wrapper>
        <Title>Login to your account</Title>
        <Separator blue={true} />
        <Form>
          <EmailSection>
            <EmailIcon></EmailIcon>
            <Input placeholder="Email" />
          </EmailSection>
          <PasswordSection>
            <PasswordIcon></PasswordIcon>
            <Input placeholder="Password" />
          </PasswordSection>
          <ActionButton text="LOGIN" blue={true} />
          <Link to="/shop/register">DON'T YOU REMEMBER THE PASSWORD ?</Link>
          <Link to="/shop/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fdfdfd;
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 150px;

  @media screen and (max-width: 500px){
    margin-top: 50px;
  }
`;
const Title = styled.form`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0px;
  text-align: center;
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
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 4px;
  background-clip: padding-box;
  border: 1px solid #ced4da;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #000;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

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
`;

export default Loginpage;
