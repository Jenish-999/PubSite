import React from "react";
import DynamicBeerList from "./DynamicBeerList";
import styled from "styled-components";
import MenuImg from "./InnerImages/left_design_menu.png";
import BeerBubbleImg from "./InnerImages/beer_bubbles.webp";
function BeerListSection() {
  return (
    <>
      <MainContainer>
        {/* Title */}
        <TopContainer>
          <h1 className="title">Craft Beers</h1>
          <p className="desp">
            Choose a perfect combination of main dish and beer
          </p>
        </TopContainer>
        {/* Beer List */}
        <BottomContainer>
          <DynamicBeerList
            beerImg="light_beer.jpg"
            catagory="Light Beer"
            title="Cantillon saint lamvinus"
            price="34.00"
          />
          <DynamicBeerList
            beerImg="draft_beer_0.jpg"
            catagory="Draft Beer"
            title="Brew 1000-Bourbon Barrel Aged"
            price="23.00"
          />
          <DynamicBeerList
            beerImg="light_beer_2.jpg"
            catagory="Light Beer"
            title="Born yesterday pale ale"
            price="18.50"
          />
          <DynamicBeerList
            beerImg="dark_beer.jpg"
            catagory="Dark Beer"
            title="stone enjoy by unfiltered IPA"
            price="26.00"
          />
        </BottomContainer>
        <BottomContainer>
          <DynamicBeerList
            beerImg="light_beer_3.jpg"
            catagory="Light Beer"
            title="Buxton/Omnipollo yellow belly"
            price="34.00"
          />
          <DynamicBeerList
            beerImg="draft_beer_2.jpg"
            catagory="Draft Beer"
            title="Ballast point sculpin IPA"
            price="23.00"
          />
          <DynamicBeerList
            beerImg="dark_beer_0.jpg"
            catagory="Dark Beer"
            title="Uncle Jacob's stout"
            price="18.50"
          />
          <DynamicBeerList
            beerImg="light_beer_4.jpg"
            catagory="Light Beer"
            title="Imperial eclipse stout elijah craig (12 years)"
            price="18.99"
          />
        </BottomContainer>
        {/* Bottom footer section*/}
        <ReachOutSection>
          <LeftInfoBox>
            <p className="title">
              Do you like <span>tasty beer</span> ?
            </p>
            <p className="desp">
              stay update with the latest news, special offers and Gutenberg's
              events !
            </p>
          </LeftInfoBox>
          <RightFormBox>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </RightFormBox>
        </ReachOutSection>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: auto;
`;
const TopContainer = styled.div`
  padding: 1rem;
  text-align: center;
  .title {
    font-size: 44px;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;

    :before {
      content: url(${MenuImg});
      display: inline-block;
      vertical-align: middle;
      line-height: 0;
      margin-right: 20px;
    }

    :after {
      content: url(${MenuImg});
      display: inline-block;
      vertical-align: middle;
      line-height: 0;
      transform: rotateY(180deg);
      margin-left: 20px;
    }
  }

  .desp {
    margin-top: 15px;
    font-size: 26px;
    color: #282c34d6;
  }
`;
const BottomContainer = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ReachOutSection = styled.div`
  height: 35vh;
  width: 100%;
  background: url(${BeerBubbleImg});
  background-size: cover;
  backgroud-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const LeftInfoBox = styled.div`
  color: #fff;
  padding: 1rem;
  .title {
    font-size: 54px;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-bottom: 5px;
    span {
      font-weight: 600;
    }
  }
  .desp {
    font-size: 23px;
  }
`;
const RightFormBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1rem;
  input {
    margin-left: 1rem;
    outline: none;
    padding: 1rem;
    width: 35%;
    font-size: 18px;
    border: none;
    border-radius: 3px;
  }

  button {
    margin-left: 1rem;
    outline: none;
    padding: 1rem;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
    background: #000;
    border: none;
    border-radius: 3px;
    transition: 0.4s ease;
    :hover {
      background: #888;
      color: #000;
    }
  }
`;
export default BeerListSection;
