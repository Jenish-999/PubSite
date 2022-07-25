import React from "react";
import styled from "styled-components";
import ProfileBg from "./InnerImages/Profile_Bg.jpg";

function Testimonies({ profile, name, site, desp }) {
  return (
    <>
      <Wrapper>
        <ImgContainer>
          <img
            src={process.env.PUBLIC_URL + `/images/${profile}`}
            alt="images"
          />
          <p className="name">{name}</p>
          <span>Posted on {site}</span>
        </ImgContainer>
        <DescriptionContainer>
          <p className="desp">{desp}</p>
        </DescriptionContainer>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  padding: 1rem;
  width: 30%;
  height: 50vh;
  border-radius: 3px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.514), 2px 1px 1px rgba(0, 0, 0, 0.514),
    3px 1px 1px rgba(0, 0, 0, 0.514), 1px 2px 2px rgba(0, 0, 0, 0.514);
  cursor: pointer;
  transition: all 0.4s ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

const ImgContainer = styled.div`
  padding: 1rem;
  text-align: center;
  img {
    border-radius: 50%;
  }
  .name {
    font-size: 18px;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }
  span {
    // color: #444;
    letter-spacing: 0.5px;
    font-size: 17px;
    text-transform: capitalize;
  }
`;
const DescriptionContainer = styled.div`
  margin: 1rem auto;
  padding: 1rem 0;
  width: 80%;
  .desp {
    light-height: 2px;
    text-align: center;
  }
`;
export default Testimonies;
