import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Picture } from "./HeroStyles";
import medlique from "../../constants/constants";
import { Alkatra } from "next/font/google";
//background: linear-gradient(121.57deg, #000000 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
const alkatra = Alkatra({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  // style: ["italic", "normal"],
});
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      {/* <Picture></Picture> */}
      <SectionTitle main center className={alkatra.className}>
        Mohamed El Aammari
      </SectionTitle>
      <SectionText>ADVENTUROUS FILM MAKER.</SectionText>
      {/* <Button
        onClick={() => (window.location = "mailto:mohamed@elaammari.com")}
      >
        contact me
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
