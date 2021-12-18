import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'am Mohamed and I'am a Front-end Developer
      </SectionTitle>
      <SectionText>
        thow i vanjlfg lkjlkdg bkjg kòlk sdf dlògk podgnfklòf kljsdf klnb
        klksdfl thow i vanjlfg lkjlkdg bkjg kòlksdf dlògkpo dgn fklòf kljsdf
        klnb k lksdfl thow i vanjlfg lkjlkdg bk jg kòlk sdf dlògkpodgnfklòf kl
        jsdf kln b k l ksdfl
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
