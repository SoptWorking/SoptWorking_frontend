import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import TextBoxContainer from '../../../containers/modal/TextBoxContainer';
import ImgPath from "./icn_handup@3x.png";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;


const HeadStr = "해보고 싶은 디자인";

const DesignOneComponent = () => {
    return(
        <>
            <Wrap>
                <HeadComponent 
                    path={ImgPath} 
                    head={HeadStr}
                />
                <TextBoxContainer />
            </Wrap>
        </>
    );
};

export default DesignOneComponent;