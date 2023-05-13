import styled from "styled-components";

export const Container = styled.div`
  //   max-width: 1280px;
  width: 100%;
  margin: auto;
`;
export const Videobackground = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0rem;
    padding: 0rem;
  }
`;

export const Videowrapper = styled.div`
  //   border: 2px solid #000;
  width: 99%;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// object-fit: cover;
