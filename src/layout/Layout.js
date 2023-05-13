import React from "react";
import video1 from "../../public/videos/video1.mp4";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container, Videobackground, Videowrapper } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Videowrapper>
        <Videobackground>
          <video src={video1} playsinline autoplay muted loop type="video/mp4">
            <source src="/videos/video1.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </Videobackground>
      </Videowrapper>

      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
