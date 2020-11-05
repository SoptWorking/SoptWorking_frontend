import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
    height: 8rem;
`;

const Button = styled.button`
    width: 41.4rem;
    height: 8rem;
    border-radius: 0.8rem;
    box-shadow: 6px 6px 2rem 0 rgba(0, 0, 0, 0.16);
    background-color: #063187;
    font-size: 3rem;
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