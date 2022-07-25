import React from "react";
import styled from "styled-components";
import Testimonies from "./Testimonies";
import LeftDesignImg from "./InnerImages/left_design_menu.png";

function Testimonial() {
  return (
    <>
      <MainContainer>
        <HeaderSection>
          <h2 className="title">Testimonials</h2>
          <p className="desp">
            While our beer is beyond praise, some of our clients still want to
            say a lot of nice things about it :
          </p>
        </HeaderSection>
        <ReferenceSection>
          <Testimonies
            profile="profile_1.webp"
            name="David"
            site="Foursquare"
            desp="In all of my experience of looking for the best craft beers, I’ve never met such a variety of those before… Their English Porter tastes to me the best of them all, and their Imperial beers are outright amazing!"
          />
          <Testimonies
            profile="profile_2.webp"
            name="Jeremy"
            site="TripAdvisor"
            desp="Whenever off work, I pass by this place just to purchase their incredible craft beers! My personal favorite is one of their barleywines… I know, some people say it is more wine than beer, but still…"
          />
          <Testimonies
            profile="profile_3.webp"
            name="Martin"
            site="Yelp"
            desp="I always thought that I knew absolutely all of the Kentucky’s best craft beers… But that was before I’ve paid a visit here… It will take me a lifetime for me to taste everything they have here…"
          />
        </ReferenceSection>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem;
`;
const HeaderSection = styled.div`
  text-align: center;
  .title {
    font-size: 44px;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    :before {
      content: url(${LeftDesignImg});
      display: inline-block;
      margin-right: 20px;
      vertical-align: middle;
      line-height: 0;
    }
    :after {
      content: url(${LeftDesignImg});
      display: inline-block;
      margin-left: 20px;
      transform: rotateY(180deg);
      vertical-align: middle;
      line-height: 0;
    }
  }

  .desp {
    font-size: 23px;
    color: rgba(0, 0, 0, 0.777);
    margin-top: 15px;
  }
`;
const ReferenceSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 0;
`;
export default Testimonial;
