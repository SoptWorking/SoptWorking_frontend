import React from 'react';
import styled from 'styled-components';

const HeadWrap = styled.div`
    display:flex;
    flex-direction:row;
`;

const HeadImage = styled.img`
    width: 3.5rem;
    height: 3.5rem;
`;

const Head = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #063187;
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