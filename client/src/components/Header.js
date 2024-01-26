import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "../router/Nav";
import Login from "../Login/Login";

const Header = () => {
   const location = useLocation();
  return (
    <>
    <MainHeader>
     <NavLink to="/">
        <h1>JKZ</h1>
        {/* <p>{location.state.id}</p> */}
        {/* <img src="./images/logo.png" alt="my logo img" /> */}
    </NavLink>
      <Nav />
    </MainHeader>
    </>

  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;