import React from "react";
import styled from "styled-components";

function BottomFooter() {
  return (
    <>
      <Container>
        <Left>
          <p>
            2022 Gutenberg. All Rights Reserved. Terms of use and Privacy Policy
          </p>
        </Left>
        <Right>
          <Li>Facebook</Li>
          <Li>Twitter</Li>
          <Li>Google +</Li>
          <Li>Pinterest</Li>
        </Right>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  color: #fff;
  padding: 1rem 5rem;
  background: #141414;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: lighter;
`;

const Left = styled.div`
  p {
    opacity: 0.85;
  }
`;
const Right = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
`;
const Li = styled.li`
  list-style: none;
  margin-left: 15px;
`;
export default BottomFooter;
