// Import libraries
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import { AiOutlineCheck } from "react-icons/ai";

// Import components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Contactpage = () => {
  const form = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jrf38ml",
        "template_0mtixxs",
        form.current,
        "user_Toch6XeJaR03txPoQpD6c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactContainer>
      <Navbar toggle={toggle} isBlack={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactWrapper>
        <Fade top>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactSubtitle>
            Any question or remarks ? Just write us a message !
          </ContactSubtitle>
        </Fade>
        <Fade>
          <ContactSection>
            <ContactInfo>
              <ContactInfoTitle>Contact Information</ContactInfoTitle>
              <ContactInfoDesc>
                Fill up the form and our team will get back to you within 24
                hours.
              </ContactInfoDesc>
              <PhoneNumber>
                <PhoneIcon></PhoneIcon>
                <PhoneText>+212 6 66 96 52 99</PhoneText>
              </PhoneNumber>
              <Email>
                <EmailIcon></EmailIcon>
                <EmailText>interactmass@gmail.com</EmailText>
              </Email>
              <Adress>
                <AdressIcon></AdressIcon>
                <AdressText>Casablanca - Morocco</AdressText>
              </Adress>
              <SocialMedias>
                <a
                  href="https://www.instagram.com/interactmass/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon></InstagramIcon>
                </a>
                <a
                  href="https://www.instagram.com/interactmass/"
                  target="_blank"
                  rel="noreferrer"
                >
                <TwitterIcon></TwitterIcon>
                </a>
                <a
                  href="https://www.instagram.com/interactmass/"
                  target="_blank"
                  rel="noreferrer"
                >
                <FacebookIcon></FacebookIcon>
                </a>
                <a
                  href="https://www.tiktok.com/@interactmass"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiktokIcon></TiktokIcon>
                </a>
              </SocialMedias>
            </ContactInfo>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <FormInput>
                <Text>First Name</Text>
                <Input
                  placeholder="Ex : John"
                  name="firstName"
                  type="text"
                  required
                ></Input>
              </FormInput>
              <FormInput>
                <Text>Last Name</Text>
                <Input
                  placeholder="Ex : Smith"
                  name="lastName"
                  type="text"
                  required
                ></Input>
              </FormInput>
              <FormInput>
                <Text>Phone Number</Text>
                <Input
                  placeholder="Ex : 06 00 00 00 00"
                  name="phone"
                  type="text"
                  required
                ></Input>
              </FormInput>
              <FormInput>
                <Text>Email Adress</Text>
                <Input
                  placeholder="Ex : johnsmith@gmail.com"
                  name="email"
                  required
                ></Input>
              </FormInput>
              <MessageInput>
                <Text>Message</Text>
                <Input
                  placeholder="Ex : Hello ! is Interact Mass still recruiting members ? "
                  name="message"
                  required
                ></Input>
              </MessageInput>
              <SubmitButton />
              {result ? (
                <SuccessMessage>
                  <CheckIcon />
                  Your message has been sent. We'll come back to you in the next
                  24 hours.
                </SuccessMessage>
              ) : null}
            </ContactForm>
          </ContactSection>
        </Fade>
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 800px) {
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

  @media screen and (max-width: 800px) {
    max-width: 800px;
  }

  @media screen and (max-width: 400px) {
    padding: 30px 20px;
  }
`;

const ContactInfoTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: 500;

  @media screen and (max-width: 800px) {
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

const ContactForm = styled.form`
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;

  @media screen and (max-width: 400px) {
    padding: 30px 20px;
  }
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
`;

const Text = styled.p`
  color: #0070f3;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #d3d3d3;
  padding: 10px 0px;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 2px solid #0070f3;
    transition: 0.2s;
  }
`;

const SubmitButton = styled.input.attrs({
  type: "submit",
  value: "SUBMIT MESSAGE",
})`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  margin: 20px 0px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background-color: #0070f3;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: rgba(0, 118, 255, 0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  @media screen and (max-width: 600px) {
    padding: 0 24px;
  }
`;

const SuccessMessage = styled.div`
  color: #270;
  background-color: #dff2bf;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const CheckIcon = styled(AiOutlineCheck)`
  font-size: 25px;
  font-weight: bold;
  margin: 0px 10px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default Contactpage;
