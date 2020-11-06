import React from 'react';
import TextBoxComponent from '../../components/modal/common/TextBoxComponent';

const TextBoxContainer = (props) => {
    return(
        <>
            <TextBoxComponent IsIntroduce={props.IsIntroduce}/>
        </>
    );
};

export default TextBoxContainer;