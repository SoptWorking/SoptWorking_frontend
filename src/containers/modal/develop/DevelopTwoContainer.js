import React from 'react';
import DevelopTwoComponent from '../../../components/modal/develop/DevelopTwoComponent';


const DevelopTwoContainer = (props) => {
    return(
        <>
            <DevelopTwoComponent IsIntroduce={props.IsIntroduce}/>
        </>
    );
};

export default DevelopTwoContainer;