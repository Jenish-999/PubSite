import React from "react";
import styled from "styled-components";

function FooterSection() {
  return (
    <>
      <MainContainer>
        <Left>
          <img src={process.env.PUBLIC_URL + "/images/logo.webp"} alt="img" />
          <p className="desp">
            We're proud to be the most popular pub in Stanford, Kentucky. We're
            sure that the thing that probably contributed the most to our
            acclaim is our wide selection of craft beers.
          </p>
        </Left>
        <Middle>
          <p className="title">Contact us</p>
          <ul>
            <Li>
              <i className="fa-solid fa-location-dot"></i>
              <a href="/"> 6087 Richmond hwy, Alexandria, VA</a>
            </Li>
            <Li>
              <i class="fa-solid fa-phone"></i>
              <a href="/">703 329 0632</a>
            </Li>
            <Li>
              <i class="fa-solid fa-clock"></i>
              <a href="/">Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00</a>
            </Li>
            <Li>
              <i class="fa-solid fa-envelope"></i>
              <a href="/">info@demolink.org</a>
            </Li>
          </ul>
        </Middle>
        <Right>
          <p className="title">Opening hours</p>
          <ul>
            <Li>Mon-Thu: 9:30 - 21:00</Li>
            <Li>Fri: 6:00 - 21:00</Li>
            <Li>Sat: 10:00 - 15:00</Li>
          </ul>
        </Right>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 50vh;
  padding: 1rem;
  background: #000000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div`
  height: 30vh;
  padding: 0.5rem;
  width: 20%;

  img {
    width: 60%;
  }

  .desp {
    font-weight: lighter;
    font-size: 17px;
    margin-top: 1rem;
    line-height: 25px;
  }
`;
const Middle = styled.div`
  height: 30vh;
  padding: 0.5rem;
  .title {
    font-size: 35px;
    font-weight: 500;
  }
`;
const Li = styled.li`
  list-style: none;
  margin-top: 1rem;
  transition: all 0.4s ease;
  a {
    font-weight: lighter;
    text-decoration: none;
    color: #fff;
    font-size: 17px;
    margin-left: 5px;
    :hover {
      color: #ffae13;
    }
  }
  :hover {
    color: #ced900;
  }
`;
const Right = styled.div`
  height: 30vh;
  padding: 0.5rem;
  .title {
    font-size: 35px;
    font-weight: 500;
  }
`;

export default FooterSection;
