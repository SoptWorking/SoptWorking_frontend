import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import ImgPath from "./icn_star@3x.png";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ValueWrap = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Value = styled.div`
    width: 20vw;
    height: 7vw;
    font-size: 0.7rem;
    font-family: NotoSansCJKkr;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 7vw;
    letter-spacing: normal;
    text-align: center;
    color: #2e2e2e;
    border-radius: 0.3vw;
    border: solid 0.08rem #cacaca;
    background-color: #ffffff;
`;


const HeadStr = "중요한 팀의 가치";

const PlanTwoComponent = (props) => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <ValueWrap>
                    <Value>가치1</Value>
                    <Value>가치2</Value>
                    <Value>가치3</Value>
                </ValueWrap>
            </Wrap>
        </>
    );
};

export default PlanTwoComponent;