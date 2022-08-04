import React from "react";
import styled from "styled-components";
import Wapper from "../../../CommonComponents/Wapper";
import MainImg from "../../../Components/InnerImages/service-page-main.jpg";
import ServiceCommonComponent from "./ServiceCommonComponent";
function Services() {
  return (
    <>
      <Wapper>
        <MainComponent>
          <div className="content">
            <div className="inner_content">
              <h1>Additional Services</h1>
              <p className="subhead">A pub is a hub of services…</p>
              <p>
                With our pub being the biggest one in Stanford, Kentucky, we’ve
                decided to take a more extensive approach towards the list of
                services that we provide.
              </p>
              <p>
                Now we’ve opened up 6 additional services, starting with craft
                beer tasting and beer delivery and finishing with options for
                tourist information and a local retail section.
              </p>
              <p>
                With all of these extra features, we’re sure that now our pub
                stands out even more, enhancing the overall level of customer
                our customer service!
              </p>
            </div>
          </div>
        </MainComponent>
        <BottomContainer>
          <GridWapper>
            <ServiceCommonComponent
              icon="flag_icon.png"
              subhead="Craft Beer Tasting"
              desp="Craft beers are made to be the kings of the beer because no else type of this drink is so enticing with the uniqueness that it has… That’s why, as our brewery produces few of our own craft beers, we also decided to provide the beer tasting service to all of our visitors!"
            />
            <ServiceCommonComponent
              icon="vechicle_icon.png"
              subhead="Local Retail"
              desp="We’re sure that a local pub venue must be a responsible hub for the local community… That is why, as recently many shops in and around Stanford has closed down, we’re also offering a small local food & drinks retail service for all of our pub’s customers!"
            />
            <ServiceCommonComponent
              icon="t-shirt_icon.png"
              subhead="Beer Delivery"
              desp="Can there be any service in the world, better than a home-bound delivery of ice-cold, fine craft beers? We’re sure that this is as good as it gets for anyone with a love for good beer. Besides craft beer delivery, we also will be able to get you any snacks off our menu."
            />
            <ServiceCommonComponent
              icon="suitcase_icon.png"
              subhead="Waiter Rental"
              desp="We’d be glad to rent any of our waiters out, for any local event or a happening, where the crowd is too big to be handled without a skillful pair of hands… This service has already proven to be a great fit for events like wedding parties, birthdays and other personal events, just as well as for the business meetings."
            />
            <ServiceCommonComponent
              icon="bell_icon.png"
              subhead="Sports Events"
              desp="As a pub, everything related to sports feels completely natural to us… So whenever there’s a big game, be sure that we’ll be broadcasting it here! The sports events require a minimal order amount to be deposited at an entrance, in order to proceed to watch the game at our venue."
            />
            <ServiceCommonComponent
              icon="service24_icon.png"
              subhead="Tourist Services"
              desp="Being one of the big tourist destinations in Kentucky, we’re always glad to provide some extra help for our city’s guests… With so many sights and interesting places all around the Stanford, we feel it as our solemn duty to also sell tourist information booklets, just as well as offering local guide’s services."
            />
          </GridWapper>
        </BottomContainer>
      </Wapper>
    </>
  );
}

const MainComponent = styled.div`
  background: url(${MainImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  height: 100vh;
  position: relative;

  .content {
    background: rgba(0, 0, 0, 0.555);
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .inner_content {
      color: #fff;
      padding: 1rem;
      width: 50%;

      h1 {
        font-family: "Amatic SC", cursive;
        font-family: "Arima", cursive;
        font-family: "Edu NSW ACT Foundation", cursive;
        font-family: "Rubik Moonrocks", cursive;
        font-size: 44px;
        letter-spacing: 2px;
      }
      .subhead {
        font-size: 20px;
        margin-bottom: 1rem;
      }
      p {
        margin: 1rem auto;
        font-size: 17px;
        line-height: 25px;
        font-weight: lighter;
        letter-spacing: 1px;
      }
    }
  }
`;

const BottomContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 2rem 1rem;
`;

const GridWapper = styled.div`
  --auto-grid-min-size: 20rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
`;

export default Services;
