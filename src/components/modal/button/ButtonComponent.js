import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
    height: 4.2vw;
`;

const Button = styled.button`
    border: none;
    padding: 0;
    width: 21.5vw;
    height: 4.2vw;
    border-radius: 0.15rem;
    box-shadow: 1.2rem 1.2rem 3.3rem 0 rgba(0, 0, 0, 0.16);
    background-color: #063187;
    font-size: 0.9rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }
    @media (orientation: landscape) {
        
    }
`;

const str = "👍잘 봤어요!"

const ButtonComponent = () => {
    return(
        <>
            <Wrap>
                <Button>{str}</Button>
            </Wrap>
        </>
    );
};

export default ButtonComponent;