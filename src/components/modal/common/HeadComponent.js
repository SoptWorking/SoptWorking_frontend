import React from 'react';
import styled from 'styled-components';

const HeadWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.8vw;
`;

const HeadImage = styled.img`
    width: 2.5vw;
    height: 2.5vw;
    margin-right: 0.3rem;
    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }
    @media only screen and (orientation: landscape) {
        
    }
`;

const Head = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #063187;
    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }
    @media (orientation: landscape) {
        
    }
`;

const HeadComponent = ({path, head}) => {
    return(
        <>
            <HeadWrap>
                <HeadImage src={path}/>
                <Head>{head}</Head>
            </HeadWrap>
        </>
    )
}

export default HeadComponent;