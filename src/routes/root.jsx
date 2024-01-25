import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle, { colors } from "../styles/Globalstyle";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <Outlet />
      </Main>
    </>
  );
};

export default Root;

const Main = styled.main`
  padding-left: 8%;
  padding-right: 8%;
  background-color: ${colors.primary};
  height: 100vh;
  width: 100vw;
  @media screen and (min-width: 992px) {
    padding-left: 12%;
    padding-right: 12%;
  }
`;
