import React from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  flex-direction: column;
`;

const ResponsiveTemplate = ({ children }) => {
  return <StyledTemplate>{children}</StyledTemplate>;
};

export default ResponsiveTemplate;
