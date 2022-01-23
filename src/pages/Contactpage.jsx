// Import libraries
import React, { useState } from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ActionButton from '../components/ActionButton'

const Contactpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ContactContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactWrapper>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactSubtitle>
          Any question or remarks ? Just write us a message !
        </ContactSubtitle>
        <ContactSection>
          <ContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactInfoDesc>
              Fill up the form and our team will get back to you within 24
              hours.
            </ContactInfoDesc>
            <PhoneNumber>
              <PhoneIcon></PhoneIcon>
              <PhoneText>06 27 00 00 66</PhoneText>
            </PhoneNumber>
            <Email>
              <EmailIcon></EmailIcon>
              <EmailText>chraibialipro@gmail.com</EmailText>
            </Email>
            <Adress>
              <AdressIcon></AdressIcon>
              <AdressText>Casablanca - Morocco</AdressText>
            </Adress>
            <SocialMedias>
              <InstagramIcon></InstagramIcon>
              <TwitterIcon></TwitterIcon>
              <FacebookIcon></FacebookIcon>
              <TiktokIcon></TiktokIcon>
            </SocialMedias>
          </ContactInfo>
          <ContactForm>
            <FormInput>
              <Text>First Name</Text>
              <Input placeholder='Ex : John'></Input>
            </FormInput>
            <FormInput>
              <Text>Last Name</Text>
              <Input placeholder='Ex : Smith'></Input>
            </FormInput>
            <FormInput>
              <Text>Phone Number</Text>
              <Input placeholder='Ex : 06 00 00 00 00'></Input>
            </FormInput>
            <FormInput>
              <Text>Email Adress</Text>
              <Input placeholder='Ex : johnsmith@gmail.com'></Input>
            </FormInput>
            <MessageInput>
              <Text>Message</Text>
              <Input placeholder='Ex : Hello ! is Interact Mass still recruiting members ? '></Input>
            </MessageInput>
            <ActionButton blue={true} text='SUBMIT MESSAGE'></ActionButton>
          </ContactForm>
        </ContactSection>
      </ContactWrapper>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fdfdfd;
`;

const ContactWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const ContactTitle = styled.h1`
  font-size: 32px;
  color: #0070f3;
  text-align: center;
`;

const ContactSubtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #666;
  text-align: center;
`;

const ContactSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 20px 0px;
  border-radius: 15px;
  background: #fff;
  padding: 10px;

  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  background: #303030;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  max-width: 400px;

  @media screen and (max-width: 800px){
    max-width: 800px;
  }


`;

const ContactInfoTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: 500;

  @media screen and (max-width: 800px){
    font-size: 24px;
  }
`;

const ContactInfoDesc = styled.p`
  color: #eee;
  font-size: 16px;
  margin: 10px 0px;
  margin-bottom: 50px;
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const PhoneIcon = styled(BsFillTelephoneFill)`
  color: #0070f3;
  font-size: 24px;
  margin-right: 20px;
`;

const PhoneText = styled.p`
  color: #fff;
  font-size: 16px;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const EmailIcon = styled(MdEmail)`
  color: #0070f3;
  font-size: 24px;
  margin-right: 20px;
`;

const EmailText = styled.p`
  color: #fff;
  font-size: 16px;
`;

const Adress = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const AdressIcon = styled(MdLocationPin)`
  color: #0070f3;
  font-size: 24px;
  margin-right: 20px;
`;

const AdressText = styled.p`
  color: #fff;
  font-size: 16px;
`;

const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

const InstagramIcon = styled(FaInstagram)`
  color: #fff;
  font-size: 32px;
  background-color: transparent;
  margin-right: 20px;
  border-radius: 1000px;
  cursor: pointer;

  &:hover {
    color: #0070f3;
    transition: 0.2s;
  }
`;

const TwitterIcon = styled(FaTwitter)`
  color: #fff;
  font-size: 32px;
  background-color: transparent;
  margin-right: 20px;
  border-radius: 1000px;

  cursor: pointer;

  &:hover {
    color: #0070f3;
    transition: 0.2s;
  }
`;

const FacebookIcon = styled(FaFacebook)`
  color: #fff;
  font-size: 32px;
  background-color: transparent;
  margin-right: 20px;
  border-radius: 1000px;

  cursor: pointer;

  &:hover {
    color: #0070f3;
    transition: 0.2s;
  }
`;

const TiktokIcon = styled(FaTiktok)`
  color: #fff;
  font-size: 32px;
  background-color: transparent;
  margin-right: 20px;
  border-radius: 1000px;

  cursor: pointer;

  &:hover {
    color: #0070f3;
    transition: 0.2s;
  }
`;

const ContactForm = styled.div`
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
`;

const FormInput = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 300px;
`;

const MessageInput = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 620px;
`

const Text = styled.p`
  color: #0070f3;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #D3D3D3;
  padding: 10px 0px;
  font-size: 16px; 
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 2px solid #0070f3;
    transition: 0.2s;
  }

`;

export default Contactpage;
