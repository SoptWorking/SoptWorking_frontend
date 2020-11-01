import React from "react";
import ResultComponet from "../../components/result/ResultComponent";
import { useDispatch, useSelector } from "react-redux";

const ResultContainer = () => {
  const { userInfo, loading, reposInfo } = useSelector(({ user, loading }) => ({
    userInfo: user.userInfo,
    reposInfo: user.reposInfo,
    loading: loading["user/GET_USER"],
  }));
  return (
    <>
      {userInfo && <ResultComponet reposInfo={reposInfo} userInfo={userInfo} />}
    </>
  );
};

export default ResultContainer;
