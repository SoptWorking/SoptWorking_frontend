import React from 'react';
import DesignOneComponent from '../../../components/modal/design/DesignOneComponent';


const DesignOneContainer = (props) => {
    return(
        <>
            <DesignOneComponent IsIntroduce={props.IsIntroduce}/>
        </>
    );
};

export default DesignOneContainer;