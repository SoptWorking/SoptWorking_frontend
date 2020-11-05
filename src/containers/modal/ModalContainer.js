import React from 'react';
import ModalComponent from '../../components/modal/ModalComponent';

const ModalContainer = ({children}) => {
    return(
        <>
            <ModalComponent>{children}</ModalComponent>
        </>
    );
};

export default ModalContainer;