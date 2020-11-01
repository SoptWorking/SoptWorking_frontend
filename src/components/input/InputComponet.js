import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
`;

const InputComponent = forwardRef(
  ({ onHandleInputChange, username, onHandleSubmit, loading }, ref) => {
    return (
      <>
        {/* {loading && <div style={{ color: "white" }}>로딩중입니다.</div>} */}
        <form onSubmit={onHandleSubmit}>
          <StyledInput ref={ref} onChange={onHandleInputChange} />
        </form>
      </>
    );
  }
);

export default InputComponent;
