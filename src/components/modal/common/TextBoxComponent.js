import React from 'react';
import styled, {css} from 'styled-components';

// height: auto로 바꾸기
const TextBoxWrap = styled.div`
    width: auto;
    height: auto;
    border-radius: 0.3vw;
    border: ${props => (props.IsIntroduce ? 'none' : 'solid 0.05rem #cacaca')};
    box-shadow: ${props => (props.IsIntroduce ? '0.3vw 0.3vw 1vw 0 rgba(38, 44, 52, 0.1)' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    width: 90%;
    height: auto;
    font-size: 0.7rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #2e2e2e;
    margin: 0.7rem 0; 
`;

const str = '여기는 딱히 글자수 제한을 두지는 않았습니다!  저는 일단 글자가 늘어나는 만큼 박스 사이즈가 조절이 되었으면 좋겠는데 어려울 것 같으면 "저는 이런사람입니다" 부분과 같이 제한 두면 될듯!';

const TextBoxComponent = (props) => {
    //console.log(props.IsIntroduce);
    return(
        <>
            <TextBoxWrap IsIntroduce={props.IsIntroduce}>
                <TextBox>{str}</TextBox>
            </TextBoxWrap>
        </>
    );
};


export default TextBoxComponent;