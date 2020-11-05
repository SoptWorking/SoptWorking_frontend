import React from 'react';
import styled from 'styled-components';


const TextBox = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
`;

const TextBoxComponent = () => {
    return(
        <>
            <TextBox></TextBox>
        </>
    );
};

export default TextBoxComponent;