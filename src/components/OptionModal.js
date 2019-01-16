import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {

    // Check if modal window is open 
    let CheckModalWindowIsOpen = false;
    if (props.modalWindowIsOpen && !!props.selectedOption) {
        CheckModalWindowIsOpen = true
    } else if(!props.modalWindowIsOpen) {
        CheckModalWindowIsOpen = false
    }

    return(
        <Modal
            isOpen={CheckModalWindowIsOpen}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected option"
        >
            <h3>Selected Option</h3>
            <p>{props.selectedOption}</p>
            <button
                onClick={props.handleClearSelectedOption}
            >Okey</button>
        </Modal>
    )
};

export default OptionModal;