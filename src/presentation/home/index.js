import React from 'react';
import { Link } from 'react-router-dom'
import './Home.scss';

const Home = () => {
    return (
        <main className="Home">
            <header className="Home__header">
                <h4 className="Home__header__subtitle">Welcome to:</h4>
                <h1 className="Home__header__title">Drop-Down Content App!</h1>
            </header>
            <section className="Home__selection">
                <div className="Home__selection__container" id="modal">
                    <Link to="/modal" className="Home__selection__container__item">MODAL</Link>
                </div>
                <div className="Home__selection__container" id="pop-up">
                    <Link className="Home__selection__container__item">POP UP</Link>
                </div>
                <div className="Home__selection__container" id="tool-tip">
                    <Link className="Home__selection__container__item">TOOL TIP</Link>
                </div>
                <div className="Home__selection__container" id="lightbox">
                    <Link className="Home__selection__container__item">LIGHTBOX</Link>
                </div>
            </section>
        </main>
    );
};

export default Home;