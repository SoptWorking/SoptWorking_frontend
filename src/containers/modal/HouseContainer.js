import React from 'react';
import HouseComponent from '../../components/modal/house/HouseComponent';

const HouseContainer = (props) => {
    return(
        <>
            <HouseComponent IsIntroduce={props.IsIntroduce}/>
        </>
    );
};

export default HouseContainer;