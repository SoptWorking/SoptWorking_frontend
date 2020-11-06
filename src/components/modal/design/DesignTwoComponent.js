import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import TextBoxContainer from '../../../containers/modal/TextBoxContainer';
import ImgPath from "./icn_design@3x.png";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 0.52vw;
`;

const Item = styled.div`
    width: 3.8rem;
    height: 1.3rem;
    margin-right: 0.5vw;
    border-radius: 0.1rem;
    border: solid 0.08rem #cacaca;
    background-color: #e5ebf6;
    font-size: 0.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3rem;
    letter-spacing: normal;
    text-align: left;
    padding-left: 0.3rem;
    color: #8192b3;
    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }
    @media (orientation: landscape) {
        
    }
`;


const HeadStr = "나의 디자인스타일";

const DesignTwoComponent = (props) => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <ItemWrap>
                    <Item>심플한</Item>
                    <Item>모던한</Item>
                    <Item>귀여운</Item>
                    <Item>세련된</Item>
                    <Item>세련된</Item>
                </ItemWrap>
                <TextBoxContainer IsIntroduce={props.IsIntroduce}/>
            </Wrap>
        </>
    );
};

export default DesignTwoComponent;