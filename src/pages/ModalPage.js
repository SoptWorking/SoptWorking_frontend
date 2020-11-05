import React from "react";
import styled from 'styled-components';
import ModalContainer from '../containers/modal/ModalContainer';
import PersonalityContainer from '../containers/modal/PersonalityContainer';
import HouseContainer from '../containers/modal/HouseContainer';
import ProfileContainer from '../containers/modal/ProfileContainer';
import IntroduceContainer from '../containers/modal/TextBoxContainer';
import ButtonContainer from '../containers/modal/ButtonContainer';


const SpaceTop = styled.div`
    height: 16rem;
`;
const Space_1 = styled.div`
    height: 2.5rem; 
`;
const Space_2 = styled.div`
    height: 4.2rem;
`;
const Space_3 = styled.div`
    height: 17.8rem;
`;
const SpaceBottom = styled.div`
    height: 10rem;
`;

const ModalPage = () => {
    return(
        <>
            <ModalContainer>
                <SpaceTop />
                <ProfileContainer />
                <Space_1 />
                <IntroduceContainer />
                <Space_2 />
                {
                // design/plan/develop이냐에 따라 다른 container넣어야함.
                // <Space_2 />
                }
                <HouseContainer />
                <Space_2 />
                <PersonalityContainer />
                <Space_3 />
                <ButtonContainer />
                <SpaceBottom />
            </ModalContainer>
        </>
    );
};

export default ModalPage;

