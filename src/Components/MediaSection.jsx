import React from "react";
import styled from "styled-components";
import LeftDesignImg from "./InnerImages/left_design_menu.png";

function MediaSection() {
  return (
    <>
      <MainContainer>
        <div className="title">Follow on Instagram #Gutenberg</div>
        <div className="picSection">
          No photos. Maybe you can have a chance to add images in future.
        </div>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 40vh;
  background: #151515;
  color: #fff;
  div {
    padding: 1rem;
  }

  .title {
    font-size: 44px;
    text-transform: capitalize;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
    font-weight: 800;
    margin-bottom: 1rem;

    :before {
      content: url(${LeftDesignImg});
      width: 12px;
      height: 12px;
      filter: invert(100%);
      margin-right: 24px;
      line-height: 0;
      vertical-align: middle;
      display: inline-block;
    }
    :after {
      content: url(${LeftDesignImg});
      width: 12px;
      height: 12px;
      line-height: 0;
      vertical-align: middle;
      margin-left: 24px;
      filter: invert(100%);
      transform: rotateY(180deg);
      display: inline-block;
    }
  }

  .picSection {
    padding: 1rem;
    margin-left: 5rem;
    font-size: 20px;
  }
`;

export default MediaSection;
