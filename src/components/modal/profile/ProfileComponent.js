import React from 'react';
import styled from 'styled-components';
import ImgBirth from "./icn_birthday@3x.png";
import ImgSchool from "./icn_school@3x.png";
import ImgHeart from "./icn_heart@3x.png";

const ProfileWrap = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ProfileImage = styled.img`
    width: 20vw;
    height: 20vw;
    border-radius: 0.4rem;
    border: 0.5vw solid #ffffff;
    box-shadow: 0 0 0.33rem 0 rgba(38, 44, 52, 0.2);
    @media (min-width: 768px){
        width: 11.5vw;
        height: 11.5vw;
        border-radius: 0.2rem;
        border: 0.5vw solid #ffffff;
        box-shadow: 0 0 0.22rem 0 rgba(38, 44, 52, 0.2);
    }

    @media (min-width: 1024px){

    }
`;

const ProfileDescribe = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3.8vw;
    @media (min-width: 768px){
        margin-left: 3.2vw;
    }

    @media (min-width: 1024px){

    }
`;

const ProfilePart = styled.div`
    font-size: 0.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #063187;
    @media (min-width: 768px){
        font-size: 0.5rem;
    }

    @media (min-width: 1024px){
        font-size:
    }
`;

const ProfileNameKeword = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1vw;
`;

const ProfileName = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
    margin-right: 0.4rem;
    @media (min-width: 768px){
        font-size: 1.2rem;
    }

    @media (min-width: 1024px){
        font-size:
    }
`;


const ProfileKeywords = styled.div`
    width: 5rem;
    height: 1rem;
    font-size: 0.7rem;
    text-align: center;
    line-height: 1rem;
    border-radius: 0.1rem;
    border: solid 1px #e5ebf6;
    background-color: #e5ebf6;
    color: #8192b3;
    margin-right: 0.2rem;
    @media (min-width: 768px){
        width: 4.7rem;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: 0.6rem;
    }

    @media (min-width: 1024px){

    }
`;

const ProfileList = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.2rem;
    @media (min-width: 768px){
        margin-bottom: 0.1rem;
    }
`;

const ProfileListItemImage = styled.img`
    width: 2vw;
    height: 2vw;
    margin-right: 0.2rem;
    @media (min-width: 768px){
        width: 1vw;
        height: 1vw;
        margin-right: 0.15rem;
    }

    @media (min-width: 1024px){
        margin-bottom:
    }
`;

const ProfileListItemText = styled.div`
    font-size: 0.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.76;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
    @media only screen and (min-width: 768px){
        font-size: 0.5rem;
    }

    @media only screen and (min-width: 1024px){
        font-size:
    }
`;

const EmptySpace = styled.div`
    @media( min-width: 768px ){
        width: 12vw;
        height: auto;
    }
`;


const ProfileComponent = () => {
    return(
        <ProfileWrap>
            <ProfileImage />
            <ProfileDescribe>
                <ProfilePart>26th PLAN</ProfilePart>
                <ProfileNameKeword>
                    <ProfileName>이현진</ProfileName>
                    <ProfileKeywords>아아아아아아아</ProfileKeywords>
                    <ProfileKeywords>아아아아아아아</ProfileKeywords>
                </ProfileNameKeword>
                <ProfileList>
                    <ProfileListItem>
                        <ProfileListItemImage src={ImgBirth}/>
                        <ProfileListItemText>2020.11.07</ProfileListItemText>
                    </ProfileListItem>
                    <ProfileListItem>
                        <ProfileListItemImage src={ImgSchool}/>
                        <ProfileListItemText>연세대학교 컴퓨터과학과</ProfileListItemText>
                    </ProfileListItem>
                    <ProfileListItem>
                        <ProfileListItemImage src={ImgHeart}/>
                        <ProfileListItemText>관심분야가 들어갑니다.</ProfileListItemText>
                    </ProfileListItem>
                </ProfileList>
            </ProfileDescribe>
            <EmptySpace />
        </ProfileWrap>
    );
};

export default ProfileComponent;