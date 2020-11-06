import React from 'react';
import DesignTwoComponent from '../../../components/modal/design/DesignTwoComponent';


const DesignTwoContainer = (props) => {
    return(
        <>
            <DesignTwoComponent IsIntroduce={props.IsIntroduce}/>
        </>
    );
};

export default DesignTwoContainer;