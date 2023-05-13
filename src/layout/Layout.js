import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container, Videobackground } from "./LayoutStyles";
export const Layout = ({ children }) => {
  return (
    <Container>
      <Videobackground>
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://cdn.pixabay.com/video/2023/05/13/162946.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Videobackground>

      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
