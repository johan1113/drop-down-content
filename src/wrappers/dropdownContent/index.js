import React from 'react';
import Modal from 'react-modal';

const DropDownContentWrapper = ({ displayDropDownContent, actionSetText, actionOffModal }) => {

    const closeModal = () => {
        const obj = {
            type: null,
            id: null,
        }
        actionOffModal(obj);
    }

    const handleInputText = (event) =>{
        actionSetText(event.currentTarget.value);
        console.log(event.currentTarget.value);
    }

    return (
        <main className="DropDownContent">
            <Modal
                isOpen={displayDropDownContent.on}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>M O D A L</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal!</div>
                <form>
                    <input type="text" onChange={handleInputText}/>
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </main>
    );
};

export default DropDownContentWrapper;