import React from "react";
import styled from "styled-components";
import mainImg from "./InnerImages/main_picture.jpg";
function MainTheme() {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <SubContainer1>
            <h3
              style={{
                fontSize: "34px",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              The Best
            </h3>
            <h1
              style={{
                fontSize: "80px",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Craft beer pub
            </h1>
            <H3>welcomes you !</H3>
            <Desp>We've got both craft & draft beers !</Desp>
            <p
              style={{
                fontSize: "25px",
                letterSpacing: "3px",
                marginBottom: "0.25rem",
              }}
            >
              Call: (555)-123-456-789
            </p>
          </SubContainer1>
          {/* <SubContainer2> */}
          <DottedCircle>
            <SolidCircle>
              <p>Book Online</p>
            </SolidCircle>
          </DottedCircle>
          {/* </SubContainer2> */}
        </SubContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${mainImg});
  background-repeat: no-repeat;
  background-position: center;
  backround-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  height: 100vh;
`;
const SubContainer1 = styled.div`
  font-family: "Edu NSW ACT Foundation", cursive;
  padding: 1rem;
`;
const H3 = styled.h3`
  font-size: 33px;
  color: #ffae13;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
const Desp = styled.p`
  font-size: 33px;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;
`;

const DottedCircle = styled.div`
  border: 4px dotted #fff;
  padding: 1rem;
  border-radius: 50%;
  color: #fff;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  :hover {
    background: #4f140e78;
  }
`;
const SolidCircle = styled.div`
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 1rem;
  font-size: 20px;
  height: 100px;
  width: 100px;
  color: brown;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background: #ffae13;
    color: #000;
  }
`;

export default MainTheme;
