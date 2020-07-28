import React from 'react';
import './SelectedItem.scss';
import imgModal from '../../assets/drop-down-content-resources/Modal.jpg';

const SelectedItem = ({ displayInputValue, actionOnModal}) => {

    const handleModal = () => {
        const obj ={
            type: "modal",
            id: "input-text",
        }
        actionOnModal(obj);
    }

    return (
        <main className="SelectedItem">
            <header className="SelectedItem__header">
                <h4 className="SelectedItem__header__subtitle">Drop-Down Content Item Selected:</h4>
                <h1 className="SelectedItem__header__title">M O D A L</h1>
            </header>
            <section className="SelectedItem__body">
                <div  className="SelectedItem__body__description">
                    <h4 className="SelectedItem__body__description__title">This is the value taken from the Modal</h4>
                    <p className="SelectedItem__body__description__value">{displayInputValue}</p>
                </div>

                <div className="SelectedItem__body__modal">
                    <a className="SelectedItem__body__modal__btn" onClick={handleModal}>SHOW A MODAL</a>
                    <img className="SelectedItem__body__modal__img" src={imgModal}/>
                </div>
            </section>
        </main>
    );
};

export default SelectedItem;