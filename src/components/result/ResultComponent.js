import React from "react";
import styled, { css } from "styled-components";
import mainColor from "../../lib/color/mainColor";

const ResultWrap = styled.div`
  width: 30rem;
  height: 15rem;
  background: grey;
  display: flex;
  align-items: center;
  padding: 2rem;
`;
const ResultAvater = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const ResultProfileWrap = styled.div`
  color: ${mainColor.button};
  height: 100%;
`;

const ResultProfileTitle = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.toggle ? "white" : "black")};
  font-weight: bolder;
`;

const ResultComponent = ({ userInfo }) => {
  const toggle = true;
  return (
    <ResultWrap>
      <ResultAvater src={userInfo.avatar_url} />
      <ResultProfileWrap>
        <ResultProfileTitle toggle={toggle}>
          {userInfo.login}
        </ResultProfileTitle>
        <ResultProfileTitle>{userInfo.name}</ResultProfileTitle>
        <hr />
      </ResultProfileWrap>
    </ResultWrap>
  );
};

export default ResultComponent;
