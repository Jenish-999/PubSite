import React from "react";
import styled from "styled-components";
import bgImg from "./InnerImages/last_main_img.jpg";

function GallerySection() {
  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="title1">Interior</div>
          <div className="title2">Will sway your mood !</div>
          <div className="desp">
            <span>
              When we were designing our craft beer pub interior, we’ve had just
              one thing in mind: an Irish pub.
            </span>
            With the fact that our founder is a Belfast, Ireland native, he had
            all the knowledge and understanding of how an authentically Irish
            craft beer pub should look like…
          </div>
          <DottedCircle>
            <SolidCircle>
              <p>View Gallery</p>
            </SolidCircle>
          </DottedCircle>
        </TopContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  background: url(${bgImg});
  background-size: cover;
  background-position: top center;
  padding: 1rem;
`;

const TopContainer = styled.div`
  //   border: 1px solid #fff;
  width: 80%;
  padding: 1rem;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title1,
  .title2 {
    color: #fff;
    font-size: 55px;
    font-weight: 700;
  }

  .title2 {
    font-size: 44px;
    text-transform: capitalize;
    font-weight: lighter;
  }

  .desp {
    font-size: 20px;
    font-weight: lighter;
    color: #fff;
    width: 70%;
    line-height: 25px;
    margin: 2rem auto;
    text-align: center;

    span {
      font-weight: 700;
    }
  }
`;
const DottedCircle = styled.div`
  border: 4px dotted #fff;
  padding: 1rem;
  border-radius: 50%;
  color: #fff;
  height: 140px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  margin-left: 1rem;

  :hover {
    background: #4f140e78;
  }
`;
const SolidCircle = styled.div`
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 1rem;
  font-size: 18px;
  font-family: "Edu NSW ACT Foundation", cursive;
  font-family: "Rubik Moonrocks", cursive;
  height: 100px;
  width: 100px;
  color: brown;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease;

  :hover {
    background: #ffae13;
    color: #000;
  }
`;

export default GallerySection;
