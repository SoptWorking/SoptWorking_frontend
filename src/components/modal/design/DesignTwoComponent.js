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
`;

const Item = styled.div`
    margin-right: 0.8rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #cacaca;
    background-color: #e5ebf6;
    font-size: 2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.65;
    letter-spacing: normal;
    text-align: left;
    color: #8192b3;
`;


const HeadStr = "나의 디자인스타일";

const DesignTwoComponent = () => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <ItemWrap>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </ItemWrap>
                <TextBoxContainer />
            </Wrap>
        </>
    );
};

export default DesignTwoComponent;