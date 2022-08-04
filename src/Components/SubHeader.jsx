import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function SubHeader() {
  return (
    <>
      <MainContainer>
        <LogoContainer>
          <Link to="/">
            <img src="/images/logo.webp" alt="logo" />
          </Link>
        </LogoContainer>

        <NavContainer>
          <Li>
            <Link className="mainAnc" to="/about">
              about
            </Link>
            <div className="sublist_ul">
              <li>
                <Link to="/about/service">Services</Link>
              </li>
              <li>
                <Link to="/about/team">Team</Link>
              </li>
              <li>
                <Link to="/about/faqpage">FAQ</Link>
              </li>
            </div>
          </Li>
          <Li>
            <Link to="/menu">menu</Link>
            <div className="sublist_ul">
              <li>
                <Link to="/menu/draftbeer">Darft Beer</Link>
              </li>
              <li>
                <Link to="/menu/snacks">Snacks Menu</Link>
              </li>
              <li>
                <Link to="/menu/lightbeer">Light Beer</Link>
              </li>
              <li>
                <Link to="/menu/darkbeer">Dark Beer</Link>
              </li>
            </div>
          </Li>
          <Li>
            <Link to="/media">media</Link>
          </Li>
          <Li>
            <Link to="/reservation">reservation</Link>
          </Li>
          <Li>
            <Link to="/blog">blog</Link>
            <div className="sublist_ul">
              <li>
                <Link to="/blog/post">Post Formats</Link>
              </li>
              <li>
                <Link to="/blog/layout">Blog Layout</Link>
              </li>
              <li>
                <Link to="/blog/sidebar">Sidebar settings</Link>
              </li>
            </div>
          </Li>
          <Li>
            <Link to="/contact">contacts</Link>
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
    z-index: 2;
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
