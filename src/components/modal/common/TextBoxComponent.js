import React from 'react';
import styled, {css} from 'styled-components';

// height: auto로 바꾸기
const TextBox = styled.div`
    width: auto;
    height: 7.1vw;
    border-radius: 0.3vw;
    border: ${props => (props.IsIntroduce ? 'none' : 'solid 0.08rem #cacaca')};
    box-shadow: ${props => (props.IsIntroduce ? '0.3vw 0.3vw 1vw 0 rgba(38, 44, 52, 0.1)' : 'none')};
    font-size: 0.7rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;


    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }
    @media (orientation: landscape) {
        
    }
`;

const TextBoxComponent = (props) => {
    //console.log(props.IsIntroduce);
    return(
        <>
            <TextBox IsIntroduce={props.IsIntroduce}></TextBox>
        </>
    );
};


export default TextBoxComponent;