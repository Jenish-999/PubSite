import React from "react";
import styled from "styled-components";

function TopHeader() {
  return (
    <>
      <Container>
        <FlexContainer1>
          <SubBox>
            <i className="fa-solid fa-location-dot"></i>
            <p style={{ marginLeft: "10px" }}>
              6087 Richmond hwy, Alexandria, VA
            </p>
          </SubBox>
          <SubBox>
            <i className="fa-solid fa-mobile"></i>
            <p style={{ marginLeft: "10px" }}>703 329 0632</p>
          </SubBox>
          <SubBox>
            <i className="fa-solid fa-business-time"></i>
            <p style={{ marginLeft: "10px" }}>
              Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00
            </p>
          </SubBox>
        </FlexContainer1>
        <FlexContainer2>
          <Li>Facebook</Li>
          <Li>Twitter</Li>
          <Li>Google +</Li>
          <Li>Pinterest</Li>
        </FlexContainer2>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background: #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  border-bottom: 1px solid #1c1c1c;
`;

const FlexContainer1 = styled.div`
  color: #fff;
  display: flex;
  flex: 2;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.85;
`;

const FlexContainer2 = styled.div`
  color: #fff;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
`;

const SubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 15px;
`;
export default TopHeader;
