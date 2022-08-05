import React from "react";
import styled from "styled-components";

function TeamCommonComponent({ icon, name, subhead, desp }) {
  return (
    <>
      <MainContainer>
        <div className="imgcontainer">
          <img
            src={process.env.PUBLIC_URL + `/images/${icon}`}
            alt="icon.png"
          />
        </div>
        <div className="name">{name}</div>
        <div className="subhead">{subhead}</div>
        <div className="desp">{desp}</div>
        <div className="social_icons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-google-plus-g"></i>
        </div>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: start;

  .imgcontainer {
    align-items: center !important;
    display: flex;
    justify-content: center;
    align-item: center;

    img {
      border-radius: 3px;
    }
  }

  .subhead,
  .name {
    margin: 1rem auto;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      color: #ffc65a;
    }
  }

  .subhead {
    font-size: 14px;
    color: #7f8389;
  }
  .name {
    text-transform: uppercase;
  }
  .desp {
    line-height: 25px;
    font-size: 17px;
    text-align: justify;
    color: #463b3f;
  }

  .social_icons {
    margin-top: 2rem;
    font-size: 16px;
    display: flex;
    justify-content: space-around;

    .fa-brands {
      padding: 5px;
      color: #d3d4cf;
      cursor: pointer;
      transition: all 0.4s ease-out;
      :hover {
        color: #999;
        transform: translate(0, -10px);
      }
    }
  }
`;
export default TeamCommonComponent;
