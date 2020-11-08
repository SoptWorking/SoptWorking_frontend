import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import ImgPath from "./icn_handup@3x.png";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectWrap = styled.div`
    width: auto;
    height: auto;
    border-radius: 0.3vw;
    border: solid 0.05rem #cacaca;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Project = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.div`
    font-size: 0.9rem;
    font-family: NotoSansCJKkr;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
    margin-top: 1.2vw;
    margin-bottom: 0.5vw;
`;

const ProjectDescribe = styled.div`
    width: auto;
    height: auto;
    font-size: 0.7rem;
    font-family: NotoSansCJKkr;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.76;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
    margin-bottom: 1.2vw;
    @media (min-width: 768px){
        font-size: 0.6rem;
    }
`;

const Line = styled.div`
    background-color: #cacaca;
    width: 90%;
    height: 0.05rem;
    margin: 0;
`;


const HeadStr = "진행한 프로젝트";

const PlanOneComponent = (props) => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <ProjectWrap>
                    <Project>
                        <ProjectTitle>프로젝트명</ProjectTitle>
                        <ProjectDescribe>아아아아아</ProjectDescribe>
                    </Project>
                    <Line />
                    <Project>
                        <ProjectTitle>프로젝트명</ProjectTitle>
                        <ProjectDescribe>아아아아아아</ProjectDescribe>
                    </Project>
                </ProjectWrap>
            </Wrap>
        </>
    );
};

export default PlanOneComponent;