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
`;

const ItemBox = styled.div`
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
                </ItemWrap>
            </Wrap>
        </>
    );
};

export default PersonalityComponent;