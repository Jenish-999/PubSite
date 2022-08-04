import React from "react";
import styled from "styled-components";

function ServiceCommonComponent({ icon, subhead, desp }) {
  return (
    <>
      <MainContainer>
        <img src={process.env.PUBLIC_URL + `/images/${icon}`} alt="icon.png" />
        <div className="subhead">{subhead}</div>
        <div className="desp">{desp}</div>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  img {
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      filter: sepia(100%);
      -webkit-filter: sepia(100%);
    }
  }

  .subhead {
    margin: 1rem auto;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      color: #ffc65a;
    }
  }
  .desp {
    line-height: 25px;
    font-size: 17px;
  }
`;

export default ServiceCommonComponent;
