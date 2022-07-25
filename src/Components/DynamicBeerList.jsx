import React from "react";
import styled from "styled-components";

function DynamicBeerList({ beerImg, catagory, title, price }) {
  return (
    <>
      <SubBox>
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + `/images/${beerImg}`} alt="Img" />
        </ImgContainer>
        <InfoContainer>
          <p className="catagory">{catagory}</p>
          <p className="title">{title}</p>
          <p className="circlePrice">${price}</p>
        </InfoContainer>
      </SubBox>
    </>
  );
}

const SubBox = styled.div`
  width: 60%;
  height: 60vh;
  text-align: center;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  img {
    width: 80%;
    transition: all 0.5s ease;
    position: relative;
    transition: all 0.5s ease;
    :hover {
      transform: translate(0, -20px);
    }
  }
`;
const InfoContainer = styled.div`
  .catagory {
    font-size: 18px;
    color: #ffae13;
  }
  .title {
    margin: 1rem auto;
    font-size: 20px;
    color: #282c34d6;
  }
  .circlePrice {
    text-align: center;
    color: #ffae13;
    width: 60px;
    height: 60px;
    display: flex;
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 4px dotted #ffae13;
  }
`;

export default DynamicBeerList;
