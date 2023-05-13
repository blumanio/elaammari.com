import Link from "next/link";
import React from "react";
import {
  // AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    {/* <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#000000",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1> */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink> FILMS</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>ITINERARY</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>GEAR</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/blumanio" target="_blank">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://github.com/blumanio" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons> */}
      <SocialIcons
        href="https://www.linkedin.com/in/mohamedelaammari/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/moelaammari" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
