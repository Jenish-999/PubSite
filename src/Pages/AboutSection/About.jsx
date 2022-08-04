import React, { useEffect } from "react";
import Wapper from "../../CommonComponents/Wapper";
import styled from "styled-components";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Wapper>
        <AboutContainer>
          <Section1>
            <img
              src={process.env.PUBLIC_URL + "/images/about-1.jpg"}
              alt="about-1"
            />
          </Section1>
          <Section2>
            <div className="title">An Irish spirit in a Kentucky town.</div>
            <p>
              When our pub’s founder, Jimmie O’Murray has moved from his home
              city of Belfast to the Western Kentucky, US he had just one dream:
              to continue his father’s brewing business in the US.
            </p>
            <p>
              He eventually succeeded in that, founding a brewery and a craft
              beer pub in a small town of Stanford. The main idea that he laid
              down and which he tries to follow himself is to make as many craft
              beers/styles as possible, with as many different flavors of them
              as possible.
            </p>
          </Section2>
          <Section3>
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/about-symbol-1.webp"}
                alt="sybmole-1"
              />
              <div className="beside">
                <p>Open Table Dinners</p>
                <small>2016</small>
              </div>
            </div>
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/about-symbol-2.webp"}
                alt="sybmole-1"
              />
              <div className="beside">
                <p>Open Table Dinners</p>
                <small>2016</small>
              </div>
            </div>
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/about-symbol-3.png"}
                alt="sybmole-1"
              />
              <div className="beside">
                <p>Open Table Dinners</p>
                <small>2016</small>
              </div>
            </div>
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/about-symbol-4.webp"}
                alt="sybmole-1"
              />
              <div className="beside">
                <p>Open Table Dinners</p>

                <small>2016</small>
              </div>
            </div>
          </Section3>
          <Section4
            data-aos="fade-out"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="title">Philosophy</div>
            <p>
              For our team, many of whom are from Belfast, Ireland, the best
              that can be said about the beer is this old Irish proverb:
            </p>
            <h3>
              {" "}
              A man takes a drink, the drink takes a drink, the drink takes the
              man.
            </h3>
            <div className="picture">
              <img
                src={process.env.PUBLIC_URL + "/images/about-2.jpg"}
                alt="about-2"
              />
            </div>
          </Section4>
          <Section5>
            <div className="title">Meet our team</div>
            <p>
              Probably, we’ve got the biggest range of craft beers in the state,
              with more than 500 craft beers available, almost a third of which
              are the ones produced at our own brewery. We take pride in how
              vast our assortment is and we never compromise on the quality of
              the beer that we sell.
            </p>
            <p>
              While the Irish pubs are definitely famous for their festive and
              fun spirited mood and atmosphere, our pub is known among all other
              Irish pubs! Located in the upbeat state of Kentucky, the vibe at
              our pub is as vibrant and intense as at the Kentucky Derby horse
              races this state is famous for!
            </p>
            <p>
              We’ve never tried to hack you for more money and we never will.
              That’s not what the independent craft beer industry or an Irish
              spirit are all about… We’re focused on cherry-picking the best
              craft beer brands for you, keeping the quality of the drink high
              and the price tags low… This is one of the main reasons the
              citizens of Kentucky love our pub so much!
            </p>
            <p>
              Our team consists of many people, all of whom do their part in
              contributing to our pub success! So whether those are the guys at
              our brewery making the craft beer or the Chef, cooking all the
              snacks back in the kitchen, the team is all about making each
              single feature of our pub stand out!
            </p>
          </Section5>
          <Section6>
            <div className="box">
              <div className="imgcontainer">
                <img
                  src={process.env.PUBLIC_URL + "/images/about-person-1.webp"}
                  alt="person-1"
                />
              </div>
              <div className="content">
                <h3 className="name">Jimmie O'Murray</h3>
                <small>Pub's Owner</small>
                <p>
                  Jimmie is a Belfast native, who had to move to the US due to
                  his wife’s father illness… As in Ireland he’s been working at
                  a local brewery and then at his father’s pub, he had a passion
                  for the craft beers in him all along… That came as no surprise
                  when he decided that his business in America will be all about
                  the craft beers.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="imgcontainer">
                <img
                  src={process.env.PUBLIC_URL + "/images/about-person-2.jpg"}
                  alt="person-2"
                />
              </div>
              <div className="content">
                <h3 className="name">Albert Collins</h3>
                <small>Snacks Chef</small>
                <p>
                  Albert is all about the food… He’s been raised in a family of
                  a Chef mother and a Sous Chef dad, and his career path has
                  been all clear from the very start… While he did not become a
                  Chef immediately, his 15 years long experience in the
                  miscellaneous restaurants has definitely contributed to his
                  skills and mastery.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="imgcontainer">
                <img
                  src={process.env.PUBLIC_URL + "/images/about-person-3.webp"}
                  alt="person-3"
                />
              </div>
              <div className="content">
                <h3 className="name">Craig Ferguson</h3>
                <small>Chef's assistant</small>
                <p>
                  Craig has both the Irish and the Scottish blood, which makes
                  him especially fit for a beer-centered pub environment…
                  Previously he’s been working at a multitude of different pubs
                  and beer restaurants, where he tapped his overall skill set
                  at. So, after such a long previous experience, he was a
                  perfect candidate for our team!
                </p>
              </div>
            </div>
          </Section6>
        </AboutContainer>
      </Wapper>
    </>
  );
}

const AboutContainer = styled.div`
  padding: 1rem;
  width: 100%;
  height: auto;
`;

const Section1 = styled.div`
  padding: 1rem;
  text-align: center;
  img {
    width: 80%;
    border-radius: 3px;
  }
`;

const Section2 = styled.div`
  padding: 1rem;
  .title {
    font-family: "Amatic SC", cursive;
    font-family: "Arima", cursive;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
    font-size: 44px;
    margin-bottom: 0.5rem;
  }
  p {
    width: 50%;
    text-align: center;
    margin: 0.5rem auto;
    font-weight: lighter;
    letter-spacing: 2px;
    line-height: 25px;
    font-size: 17px;
  }
`;

const Section3 = styled.div`
  width: 80%;
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .box {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin-right: 0.5rem;
    }

    .beside {
      p {
        font-size: 18px;
        letter-spacing: 1px;
        text-transform: capitalize;
      }
    }
  }
`;

const Section4 = styled.div`
  padding: 1rem;

  .title {
    width: 50%;
    margin: 0 auto;
    font-family: "Amatic SC", cursive;
    font-family: "Arima", cursive;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
    font-size: 44px;
    margin-bottom: 0.5rem;
  }
  p,
  h3 {
    width: 50%;
    text-align: center;
    margin: 0.5rem auto;
    font-weight: lighter;
    letter-spacing: 2px;
    line-height: 25px;
    font-size: 17px;
  }

  h3 {
    font-weight: 700;
    margin-top: 2rem;
    font-size: 20px;
    letter-spacing: 1px;
  }

  .picture {
    margin: 3rem auto;
    text-align: center;
    img {
      border-radius: 3px;
      width: 80%;
    }
  }
`;

const Section5 = styled.div`
  padding: 1rem;

  .title {
    width: 50%;
    margin: 0 auto;
    font-family: "Amatic SC", cursive;
    font-family: "Arima", cursive;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
    font-size: 44px;
    margin-bottom: 0.5rem;
  }
  p {
    width: 50%;
    margin: 2rem auto;
    font-weight: lighter;
    letter-spacing: 1px;
    line-height: 25px;
    font-size: 17px;
  }
`;

const Section6 = styled.div`
  padding: 1rem;
  width: 50%;
  margin: 0 auto;

  .imgcontainer {
    img {
      border-radius: 3px;
    }
  }

  .box {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
  }

  .content {
    margin-left: 2rem;
    .name {
      font-size: 20px;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }

    small {
      margin-bottom: 1rem;
    }
    p {
      margin-top: 1rem;
      font-weight: lighter;
      letter-spacing: 1px;
      line-height: 25px;
      font-size: 17px;
    }
  }
`;
export default About;
