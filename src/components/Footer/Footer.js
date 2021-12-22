import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call-Me</LinkTitle>
          <LinkItem href="tel:00393891969024"> 3891969024</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:mohamed@elaammari.com">
            {" "}
            mohamed@elaammari.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at time</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/blumanio">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/mohamedelaammari/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.instagram.com/moelaammari"
          target="_blank"
        >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
