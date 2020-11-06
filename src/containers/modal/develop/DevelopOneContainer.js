import React from 'react';
import DevelopOneComponent from '../../../components/modal/develop/DevelopOneComponent';


const DevelopOneContainer = (props) => {
    return(
        <>
            <DevelopOneComponent IsIntroduce={props.IsIntroduce}/>
        </>
    );
};

export default DevelopOneContainer;