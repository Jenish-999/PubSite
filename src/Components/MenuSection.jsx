import React from "react";
import styled from "styled-components";
import MenuImg from "./InnerImages/left_design_menu.png";
import UpLeftArrow from "./InnerImages/up_left_arrow.png";
import DownArrow from "./InnerImages/down_arrow.png";
import UpRightArrow from "./InnerImages/up_right_arrow.png";
import LeftDownArrow from "./InnerImages/down_left_arrow.png";
function MenuSection() {
  return (
    <>
      <MainContainer>
        <Container1>
          <SymbolGuide>
            <img
              src={process.env.PUBLIC_URL + "/images/symbol_1.jpg"}
              alt="le cordon bleu"
            />
            <p>Le Cordon Bleu</p>
          </SymbolGuide>
          <SymbolGuide>
            <img
              src={process.env.PUBLIC_URL + "/images/symbol_2.webp"}
              alt="Travelers` Choice"
            />
            <p>Travelers` Choice</p>
          </SymbolGuide>
          <SymbolGuide>
            <img
              src={process.env.PUBLIC_URL + "/images/symbol_3.jpg"}
              alt="Michelin Guide"
            />
            <p>Michelin Guide</p>
          </SymbolGuide>
        </Container1>
        <Container2>
          <h2>Gutenberg Menu</h2>
        </Container2>
        <Container3>
          <BoxUp>
            <ImgContainer>
              <img
                src={process.env.PUBLIC_URL + "/images/wine_glass_1.jpg"}
                alt="wine_glass_1"
              />
            </ImgContainer>
            <BeerName>
              <p>Light Beer</p>
            </BeerName>
          </BoxUp>
          <BoxDown>
            <BeerNameUp>
              <p>Draft Beer</p>
            </BeerNameUp>
            <ImgContainer>
              <img
                src={process.env.PUBLIC_URL + "/images/wine_glass_2.jpg"}
                alt="wine_glass_2"
              />
            </ImgContainer>
          </BoxDown>
          <BoxUp>
            <ImgContainer>
              <img
                src={process.env.PUBLIC_URL + "/images/wine_glass_3.jpg"}
                alt="wine_glass_3"
              />
            </ImgContainer>
            <BeerName>
              <span>Dark Beer</span>
            </BeerName>
          </BoxUp>
          <BoxDown>
            <BeerNameUp>
              <span>Snacks Menu</span>
            </BeerNameUp>
            <ImgContainer>
              <img
                id="burgerImg"
                src={process.env.PUBLIC_URL + "/images/burger_img.jpg"}
                alt="burger_img"
              />
            </ImgContainer>
          </BoxDown>
        </Container3>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: auto;
  width: 100%;
`;

const Container1 = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SymbolGuide = styled.div`
  cursor: pointer;

  p {
    text-align: center;
    font-family: "Lato", Helvetica, Arial, Lucida, sans-serif;
    font-size: 17px;
    color: #555;
    padding-top: 1rem;
    transition: all 0.5s ease;
  }
  :hover {
    p {
      color: #ffae13;
    }
  }
`;

const Container2 = styled.div`
  padding: 0.5rem;
  margin: 2rem 0;

  h2 {
    font-style: normal;
    font-size: 44px;
    line-height: 1.25;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    letter-spacing: 0px;
    text-align: center;
    color: rgb(27 27 27);

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
      transform: rotateY(210deg);
      vertical-align: middle;
      line-height: 0;
      margin-left: 20px;
      margin-right: 0;
    }
  }
`;
const Container3 = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Amatic SC", cursive;
  font-family: "Edu NSW ACT Foundation", cursive;
  font-family: "Rubik Moonrocks", cursive;
  font-size: 30px;
`;

const BoxUp = styled.div`
  cursor: pointer;
  transition: all 0.4s ease;
  :hover {
    color: #ffae13;
  }
`;

const BoxDown = styled(BoxUp)``;

const ImgContainer = styled.div`
  padding: 2rem;
  img {
    height: 50vh;
    position: relative;
    transition: all 0.5s ease;
    :hover {
      transform: translate(0, -20px);
    }
  }

  #burgerImg {
    height: 30vh;
  }
`;

const BeerName = styled.div`
  text-align: center;

  p {
    text-transform: uppercase;

    position: relative;

    :after {
      content: url(${UpLeftArrow});
      display: inline-block;
      position: absolute;
      left: 85%;
      bottom: 5px;
    }
  }
  span {
    text-transform: uppercase;

    position: relative;

    :before {
      content: url(${UpRightArrow});
      display: inline-block;
      position: absolute;
      right: 100%;
      bottom: 5px;
    }
  }
`;

const BeerNameUp = styled.div`
  text-align: center;

  p {
    text-transform: uppercase;
    position: relative;

    :before {
      content: url(${DownArrow});
      display: inline-block;
      position: absolute;
      left: 0;
      top: 13px;
    }
  }

  span {
    text-transform: uppercase;
    position: relative;

    :before {
      content: url(${LeftDownArrow});
      display: inline-block;
      position: absolute;
      left: 110%;
      top: 10px;
    }
  }
`;

export default MenuSection;
