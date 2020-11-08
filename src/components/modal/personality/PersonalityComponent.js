import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import ImgPath from "./icn_working@3x.png";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-itmes: center;
`;

const ItemBox = styled.div`
    width: 22%;
    height: 7vw;
    border-radius: 0.3vw;
    border: solid 0.05rem #cacaca;
    background-colcor: #ffffff;
`;


const HeadStr = "작업성향";

const PersonalityComponent = () => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <ItemWrap>
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                </ItemWrap>
            </Wrap>
        </>
    );
};

export default PersonalityComponent;