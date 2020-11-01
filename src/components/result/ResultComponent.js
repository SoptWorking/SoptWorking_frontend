import React, { forwardRef } from "react";
import styled from "styled-components";

const ResultWrap = styled.div`
  padding: 2rem;
  width: 40rem;
  background: grey;
  display: flex;
  align-items: center;
  padding: 2rem;
`;
const ResultAvater = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-right: 3rem;
`;

const ResultProfileWrap = styled.div`
  color: white;
  height: 100%;
  flex-grow: 1;
`;

const ResultProfileTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 100%;
`;

const ReposListWrap = styled.div``;

const RepoButton = styled.a`
  background: white;
  opacity: 0.5;
  padding: 0.4rem;
  text-decoration: none;
  border-radius: 5rem;
  border: 1px solid white;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  display: inline-block;
  color: black;
`;

const ResultComponent = ({ userInfo, reposInfo }) => {
  return (
    <ResultWrap>
      <ResultAvater src={userInfo.avatar_url} />
      <ResultProfileWrap>
        <ResultProfileTitle>{userInfo.login}</ResultProfileTitle>
        <ResultProfileTitle>{userInfo.name}</ResultProfileTitle>
        <hr />
        <ReposListWrap>
          {reposInfo &&
            reposInfo.slice(1, 10).map((e, index) => {
              return (
                <RepoButton key={index} href={e.html_url}>
                  {e.name}
                </RepoButton>
              );
            })}
        </ReposListWrap>
      </ResultProfileWrap>
    </ResultWrap>
  );
};

export default ResultComponent;
