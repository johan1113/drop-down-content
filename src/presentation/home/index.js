import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <header className="Home__header">
                <h4 className="Home__header__subtitle">Welcome to:</h4>
                <h1 className="Home__header__title">Drop-Down Content App!</h1>
            </header>
            <section className="Home__selection">
                <div className="Home__selection__container" id="modal">
                    <a href="modal" className="Home__selection__container__item">MODAL</a>
                </div>
                <div className="Home__selection__container" id="pop-up">
                    <a className="Home__selection__container__item">POP UP</a>
                </div>
                <div className="Home__selection__container" id="tool-tip">
                    <a className="Home__selection__container__item">TOOL TIP</a>
                </div>
                <div className="Home__selection__container" id="lightbox">
                    <a className="Home__selection__container__item">LIGHTBOX</a>
                </div>
            </section>
        </div>
    );
};

export default Home;