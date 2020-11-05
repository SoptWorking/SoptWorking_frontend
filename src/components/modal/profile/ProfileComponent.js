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
`;

const ProfileImage = styled.img`
    width: 24.4rem;
    height: 24.4rem;
    border-radius: 1rem;
    border: 0.8rem solid #ffffff;
    box-shadow: 0 0 2rem 0 rgba(38, 44, 52, 0.2);
`;

const ProfileDescribe = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7.3rem;
`;

const ProfilePart = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #063187;
`;

const ProfileNameKeword = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProfileName = styled.div`
    font-size: 4.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
`;


const ProfileKeywords = styled.div`
    width: 15.5rem;
    height: 4.1rem;
    border-radius: 0.5rem;
    border: solid 1px #e5ebf6;
    background-color: #e5ebf6;
    color: #8192b3;
    margin: 1rem;
`;

const ProfileList = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileListItem = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProfileListItemImage = styled.img`
    width: 2rem;
    height: 2rem;
`;

const ProfileListItemText = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.76;
    letter-spacing: normal;
    text-align: left;
    color: #2e2e2e;
`;


const ProfileComponent = () => {
    return(
        <ProfileWrap>
            <ProfileImage />
            <ProfileDescribe>
                <ProfilePart></ProfilePart>
                <ProfileNameKeword>
                    <ProfileName></ProfileName>
                    <ProfileKeywords></ProfileKeywords>
                    <ProfileKeywords></ProfileKeywords>
                </ProfileNameKeword>
                <ProfileList>
                    <ProfileListItem>
                        <ProfileListItemImage src={ImgBirth}/>
                        <ProfileListItemText></ProfileListItemText>
                    </ProfileListItem>
                    <ProfileListItem>
                        <ProfileListItemImage src={ImgSchool}/>
                        <ProfileListItemText></ProfileListItemText>
                    </ProfileListItem>
                    <ProfileListItem>
                        <ProfileListItemImage src={ImgHeart}/>
                        <ProfileListItemText></ProfileListItemText>
                    </ProfileListItem>
                </ProfileList>
            </ProfileDescribe>
        </ProfileWrap>
    );
};

export default ProfileComponent;