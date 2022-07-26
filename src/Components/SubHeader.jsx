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
            <a className="mainAnc" href="/">
              about
            </a>
            <div className="sublist_ul">
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </div>
          </Li>
          <Li>
            <a href="/">menu</a>
            <div className="sublist_ul">
              <li>
                <a href="/">Darft Beer</a>
              </li>
              <li>
                <a href="/">Snacks Beer</a>
              </li>
              <li>
                <a href="/">Light Beer</a>
              </li>
              <li>
                <a href="/">Dark Beer</a>
              </li>
            </div>
          </Li>
          <Li>
            <a href="/">media</a>
          </Li>
          <Li>
            <a href="/">reservation</a>
          </Li>
          <Li>
            <a href="/">blog</a>
            <div className="sublist_ul">
              <li>
                <a href="/">Post Formats</a>
              </li>
              <li>
                <a href="/">Blog Layout</a>
              </li>
              <li>
                <a href="/">Sidebar settings</a>
              </li>
            </div>
          </Li>
          <Li>
            <a href="/">contacts</a>
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
  position: relative;

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

  .sublist_ul {
    position: absolute;
    top: 20px;
    left: 0px;
    padding: 1rem 5rem;
    background: #151515;
    list-style: none;
    padding-left: 5px;
    border-radius: 4px;
    display: none;
    transition: 0.4s ease-out;
    width: 220px;
    li {
      margin: 1rem 0.5rem;
      a {
        display: block;
        text-transform: capitalize;
      }
    }
  }

  :hover {
    .sublist_ul {
      display: block;
    }
  }
`;

export default SubHeader;
