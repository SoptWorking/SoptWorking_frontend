import React from 'react';
import styled from 'styled-components';
import HeadComponent from '../common/HeadComponent';
import TextBoxContainer from '../../../containers/modal/TextBoxContainer';
import ImgPath from "./icn_house@3x.png";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;


const HeadStr = "원하는 합숙소의 모습";

const HouseComponent = () => {
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

export default HouseComponent;