import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import TextBoxContainer from '../../../containers/modal/TextBoxContainer';
import ImgPath from "./icn_handup@3x.png";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;


const HeadStr = "도전해보고 싶은 개발";

const DevelopOneComponent = (props) => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <TextBoxContainer IsIntroduce={props.IsIntroduce}/>
            </Wrap>
        </>
    );
};

export default DevelopOneComponent;