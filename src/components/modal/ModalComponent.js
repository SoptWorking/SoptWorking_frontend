import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
    width:100vw;
    height: 100vh;
    background-color: rgba( 0, 0, 0, 0.2 );
`;


const Modal = styled.div`
    width: 72vw;
    height: auto;
    position: absolute;
    margin-top: 7vw;
    margin-left: 7vw;
    border-radius: 0.14rem;
    box-shadow: 0.1rem 0.1rem 0.33rem 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display:flex;
    justify-content: center;
    align-items:center;
    padding-left: 7%;
    padding-right:7%;
    @media (min-width: 768px){
        width: 58vw;
        margin-top: 10vw;
        margin-left: 14vw;
    }

    @media (min-width: 1024px){

    }
    @media only screen and (orientation: landscape) {
        
    }
`;

const ModalWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalComponent = ({children}) => {
    return(
        <Background>
            <Modal>
            <ModalWrap>{children}</ModalWrap>
            </Modal>
        </Background>   
    );
};

export default ModalComponent;