import React from "react";
import styled from 'styled-components';
import ModalContainer from '../containers/modal/ModalContainer';
import PersonalityContainer from '../containers/modal/PersonalityContainer';
import HouseContainer from '../containers/modal/HouseContainer';
import ProfileContainer from '../containers/modal/ProfileContainer';
import IntroduceContainer from '../containers/modal/TextBoxContainer';
import ButtonContainer from '../containers/modal/ButtonContainer';
import DesignOneContainer from '../containers/modal/design/DesignOneContainer';
import DesignTwoContainer from '../containers/modal/design/DesignTwoContainer';
import DevelopOneContainer from '../containers/modal/develop/DevelopOneContainer';
import DevelopTwoContainer from '../containers/modal/develop/DevelopTwoContainer';
import PlanOneContainer from '../containers/modal/plan/PlanOneContainer';
import PlanTwoContainer from '../containers/modal/plan/PlanTwoContainer';

const SpaceTop = styled.div`
    height: 13vw;
    @media (min-width: 768px){
        height: 9vw;
    }
`;
const Space_1 = styled.div`
    height: 1.3vw; 
`;
const Space_2 = styled.div`
    height: 2.5vw;
`;
const Space_3 = styled.div`
    height: 15vw;
    @media (min-width: 768px){
        height: 11vw;
    }
`;
const SpaceBottom = styled.div`
    height: 10vw;
    @media (min-width: 768px){
        height: 6vw;
    }
`;

const ModalPage = () => {
    return(
        <>
            <ModalContainer>
                <SpaceTop />
                <ProfileContainer />
                <Space_1 />
                <IntroduceContainer IsIntroduce={true}/>
                <Space_2 />
                {
                /* design/plan/develop이냐에 따라 다른 container넣어야함.
                // <Space_2 />
                }
                <DesignOneContainer IsIntroduce={false}/>
                <Space_2 />
                <DesignTwoContainer IsIntroduce={false}/>
                <DevelopOneContainer IsIntroduce={false}/>
                <Space_2 />
                <DevelopTwoContainer IsIntroduce={false}/>
                <PlanOneContainer />
                <Space_2 />
                <PlanTwoContainer />
                */
                }
                <DesignOneContainer IsIntroduce={false}/>
                <Space_2 />
                <DesignTwoContainer IsIntroduce={false}/>
                <Space_2 />
                <HouseContainer IsIntroduce={false}/>
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

