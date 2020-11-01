import React, { useRef } from "react";
import InputComponent from "../../components/input/InputComponet";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../modules/input";
import { getUser } from "../../modules/user";

const InputContainer = () => {
  const dispatch = useDispatch();
  const nameInput = useRef();

  const { username, loading } = useSelector(({ input, loading }) => ({
    username: input.username,
    loading: loading["user/GET_USER"],
  }));

  const onHandleInputChange = (e) => {
    const inputValue = e.target.value;
    dispatch(changeInput(inputValue));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getUser(username));
    nameInput.current.value = "";
  };

  return (
    <>
      <InputComponent
        loading={loading}
        onHandleSubmit={onHandleSubmit}
        onHandleInputChange={onHandleInputChange}
        username={username}
        ref={nameInput}
      />
    </>
  );
};

export default InputContainer;
