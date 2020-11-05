import React from 'react';
import styled from 'styled-components';


const ModalWrap = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.8rem;
    box-shadow: 0.6rem 0.6rem 2rem 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    padding-left: 13.6rem;
    padding-right: 13.6rem;
`;

const ModalComponent = ({children}) => {
    return(
        <ModalWrap>{children}</ModalWrap>
    );
};

export default ModalComponent;