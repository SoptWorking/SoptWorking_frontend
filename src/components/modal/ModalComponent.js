import React from 'react';
import styled from 'styled-components';
// 미디어쿼리 768 1024
// 모바일 먼저 고려
// 가로방향 고려

const Background = styled.div`
    width:100vw;
    height:100vh;
    background-color: rgba( 0, 0, 0, 0.2 );
`;

// height auto로 변경
const Modal = styled.div`
    width: 85vw;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.14rem;
    box-shadow: 0.1rem 0.1rem 0.33rem 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display:flex;
    justify-content: center;
    align-items:center;
    
    @media (min-width: 768px){

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