import React from "react";
import Wapper from "../../../CommonComponents/Wapper";
import MainImg from "../../../Components/InnerImages/team_main.jpg";
import styled from "styled-components";
import TeamCommonComponent from "./TeamCommonComponent";
function Team() {
  return (
    <>
      <Wapper>
        <MainComponent>
          <div className="content">
            <div className="inner_content">
              <h1>This is the team behind the pub.</h1>
              <p className="subhead">Upbeat and efficient.</p>
              <p>
                People often praise the value of the teamwork. We know its value
                for a fact.
              </p>
              <p>
                And while the value of a collective teamwork is vital, the
                weight of each individual contribution is no less crucial.
              </p>
              <p>This is especially true with our team.</p>
              <p>
                Some of them work in our brewery, making our craft beers a
                reality, while some of our team members either serve the beer in
                our pub or prepare the beer snacks.
              </p>
              <p className="last_para">
                We know that either of those 3 things is what our clients come
                to our pub for
              </p>
            </div>
          </div>
        </MainComponent>
        <BottomContainer>
          <GridWapper>
            <TeamCommonComponent
              icon="about-person-1.webp"
              name="Jimmie O'Murray "
              subhead="Pub's Owner"
              desp="Jimmie is a Belfast native, who had to move to the US due to his wife’s father illness… As in Ireland he’s been working at a local brewery and then at his father’s pub, he had a passion for the craft beers in him all along… That came as no surprise when he decided that his business in America will be all about the craft beers."
            />
            <TeamCommonComponent
              icon="about-person-2.jpg"
              name="Albert Collins "
              subhead="Snacks Chef"
              desp="Albert is all about the food… He’s been raised in a family of a Chef mother and a Sous Chef dad, and his career path has been all clear from the very start… While he did not become a Chef immediately, his 15 years long experience in the miscellaneous restaurants has definitely contributed to his skills and mastery."
            />
            <TeamCommonComponent
              icon="about-person-3.webp"
              name="Craig Ferguson "
              subhead="Chef's assistant"
              desp="Craig has both the Irish and the Scottish blood, which makes him especially fit for a beer-centered pub environment… Previously he’s been working at a multitude of different pubs and beer restaurants, where he tapped his overall skill set at. So, after such a long previous experience, he was a perfect candidate for our team!"
            />
            <TeamCommonComponent
              icon="person_4.jpg"
              name="Arnold Lidke"
              subhead="Brewery Worker"
              desp="Arnold is a craft beer enthusiast, whose prior experience included both working at a Carlsberg beer producers corporation’s factory plant, as well as for the biggest independent craft beer brand in the state of New York – “Lorostar”… This has greatly contributed to his skills to be fit for working at our brewery plant, helping us indulge our visitors with the best craft beer in KY!"
            />
            <TeamCommonComponent
              icon="person_5.jpg"
              name="Thomas Flaherty "
              subhead="Brewery Worker"
              desp="Mr. Flaherty has moved to the US from Belfast, just like our pub founder Jimmie O’Murray. His passion for a good beer can be explained by the fact…. that he’s Irish! Besides that, his personal work proficiency is definitely a factor, which attributes as to why Thomas is one of our best brewery workers!"
            />
            <TeamCommonComponent
              icon="person_6.jpg"
              name="Guy Fawkes"
              subhead="Brewery Worker"
              desp="Guy is originally from England, which was exactly the reason why we were so glad to take him into our brewery team. The thing was, that in order to brew great English Porter and Pale Ale at our pub brewery, we’ve just needed someone with an extensive knowledge on the subject… Guy, fits the description perfectly!"
            />
            <TeamCommonComponent
              icon="person_7.jpg"
              name="Benjamin Cymrean"
              subhead="Brewery Worker"
              desp="Benjie is from Wales, so that’s why he has a lot to do with the Black Ale and Welsh Ale craft beers lineup that we’ve produced recently… His prior experience of working at an “Evan Warriors” brewery in Cardiff has surely contributed to his overall skills and mastery. On par with that, Benjamin is currently our youngest worker…"
            />
            <TeamCommonComponent
              icon="person_8.jpg"
              name="Janeth O'Conell"
              subhead="Senior Waitress"
              desp="While Mrs. O’Conell is now our senior waitress, just a few years ago she’s been a rookie in our team. All we can say that it was a fortunate day, when she came in to apply for a job!  Her customer service skills are excellent and on top of that Janeth knows the language of beer perfectly. Altogether this makes her an exemplary waiter."
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
      .subhead,
      .last_para {
        font-size: 17px;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }
      p {
        margin: 2rem auto;
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
  --auto-grid-min-size: 16rem;
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

export default Team;
