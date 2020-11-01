import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
`;

const InputComponent = ({
  onHandleInputChange,
  username,
  onHandleSubmit,
  loading,
}) => {
  return (
    <>
      {/* {loading && <div style={{ color: "white" }}>로딩중입니다.</div>} */}
      <form onSubmit={onHandleSubmit}>
        <StyledInput onChange={onHandleInputChange} value={username} />
      </form>
    </>
  );
};

export default InputComponent;
