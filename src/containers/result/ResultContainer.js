import React from "react";
import ResultComponet from "../../components/result/ResultComponent";
import { useDispatch, useSelector } from "react-redux";
import user from "../../modules/user";

const ResultContainer = () => {
  const { userInfo, loading } = useSelector(({ user, loading }) => ({
    userInfo: user.userInfo,
    loading: loading["user/GET_USER"],
  }));
  return <>{userInfo && <ResultComponet userInfo={userInfo} />}</>;
};

export default ResultContainer;
