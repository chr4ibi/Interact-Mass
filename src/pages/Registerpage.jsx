// Import libraries
import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import ShopNavbar from "../components/ShopNavbar";

// Import components
import Separator from "../components/Separator";
import Button from "../components/Button";

const Registerpage = () => {
  return (
    <Container>
      <ShopNavbar dark={false} backPath="/shop"/>
      <Wrapper>
        <Title>Create an account</Title>
        <Separator />
        <Form>
          <NameInputs>
            <NameIcon></NameIcon>
            <FirstName placeholder="First Name"></FirstName>
            <LastName placeholder="Last Name"></LastName>
          </NameInputs>
          <EmailSection>
            <EmailIcon></EmailIcon>
            <Input placeholder="Email" />
          </EmailSection>
          <PasswordSection>
            <PasswordIcon></PasswordIcon>
            <Input placeholder="Password" />
          </PasswordSection>
          <PasswordSection>
            <PasswordIcon></PasswordIcon>
            <Input placeholder="Confirm Password" />
          </PasswordSection>
          <Button text="REGISTER" blue={true} />
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

const NameInputs = styled.div`
  display: flex;
  align-items: center;
`;

const FirstName = styled.input`
  width: 150px;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  margin: 10px;

  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const LastName = styled.input`
  width: 150px;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  margin: 10px;

  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const EmailSection = styled.div`
  display: flex;
  align-items: center;
`;

const PasswordSection = styled.div`
  display: flex;
  align-items: center;
`;

const NameIcon = styled(BsFillPersonFill)`
  font-size: 32px;
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

export default Registerpage;
