import React from "react";
import ResponsiveTemplate from "../components/common/ResponsiveTemplate";
import InputContainer from "../containers/input/InputContainer";
import ResultContainer from "../containers/result/ResultContainer";
const MainPage = () => {
  return (
    <ResponsiveTemplate>
      <InputContainer />
      <ResultContainer />
    </ResponsiveTemplate>
  );
};

export default MainPage;
