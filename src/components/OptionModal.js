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
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                }
            }}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            <p className="modal__body">{props.selectedOption}</p>
            <button
                className="button"
                onClick={props.handleClearSelectedOption}
            >Okey</button>
        </Modal>
    )
};

export default OptionModal;