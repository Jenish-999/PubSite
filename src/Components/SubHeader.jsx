import React from "react";
import styled from "styled-components";

function SubHeader() {
  return (
    <>
      <MainContainer>
        <LogoContainer>
          <img src="/images/logo.webp" alt="logo" />
        </LogoContainer>

        <NavContainer>
          <Li>
            <a href="/">about</a>
          </Li>
          <Li>
            <a href="/">menu</a>
          </Li>
          <Li>
            <a href="/">media</a>
          </Li>
          <Li>
            <a href="/">reservation</a>
          </Li>
          <Li>
            <a href="/">blog</a>
          </Li>
          <Li>
            <a href="/">contacts</a>
          </Li>
          <Li>
            <a href="/">pages</a>
          </Li>
        </NavContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 30vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LogoContainer = styled.div``;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Li = styled.li`
  font-family: Lato, sans-serif;
  list-style: none;

  margin-left: 1rem;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-weight: 100;
    opacity: 0.75;
    position: relative;
    transition: all 0.5s ease;
    text-transform: uppercase;

    :hover {
      color: #ffae13;
      font-size: 13px;
      transform: scale3d(1, 1, 1);
      transition: all 0.5s ease;

      ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 3px dotted #ffae13;
        display: block;
      }
    }
  }
`;

export default SubHeader;
