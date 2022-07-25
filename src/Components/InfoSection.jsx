import React from "react";
import styled from "styled-components";
import BeerBackground from "./InnerImages/third_main_img.jpg";
import StarImg from "./InnerImages/star.png";
function InfoSection() {
  return (
    <>
      <MainInfoContainer>
        <LeftContainer>
          <BoxContainer>
            <h2>Gutenberg</h2>
            <p className="SubInfo">
              The Ultimate place for <span>craft beers</span>
            </p>
          </BoxContainer>
          <BoxContainer>
            <p className="Desp">
              Without any doubt, our brewery and a craft beer pub is the
              ultimate go-to location for any kind of a distinctively different
              beer.
            </p>
          </BoxContainer>
          <BoxContainer>
            <Li>Dark Beers</Li>
            <Li>Light Beers</Li>
            <Li>Craft Beers</Li>
            <Li>Draft Beers</Li>
            <Li>Barleywine-styled ales</Li>
          </BoxContainer>
        </LeftContainer>
        <RightContainer>
          <DottedCircle>
            <SolidCircle>
              <p>More about Gutenberg</p>
            </SolidCircle>
          </DottedCircle>
        </RightContainer>
      </MainInfoContainer>
    </>
  );
}

const MainInfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BeerBackground});
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;
  background-repeate: no-repeate;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftContainer = styled.div`
  color: #fff;
  padding: 1rem;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;
const RightContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  height: 100vh;
`;
const BoxContainer = styled.div`
  padding: 1rem;
  h2 {
    font-size: 44px;
    line-height: 1.25;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
  }

  .SubInfo {
    font-size: 55px;
    width: 100%;
    text-align: center;
    margin: 1rem;
    letter-spacing: 2px;

    span {
      font-weight: 900;
    }
  }

  .Desp {
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin: 1rem;
    font-weight: 50;
    letter-spacing: 1px;
  }
`;
const Li = styled.li`
  margin: 1rem;
  font-size: 16px;
  list-style: none;
  letter-spacing: 1px;
  position: relative;

  :before {
    content: url(${StarImg});
      width: 12px;
      height: 12px;
      display: inline-block;
      position: absolute;
      left: -25px;
   
    }
  }
`;
const DottedCircle = styled.div`
  border: 4px dotted #fff;
  padding: 1rem;
  border-radius: 50%;
  color: #fff;
  height: 150px;
  width: 150px;
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
  height: 120px;
  width: 120px;
  color: brown;
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background: #ffae13;
    color: #000;
  }
`;

export default InfoSection;
