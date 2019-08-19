import React from 'react'
import { CSSTransition } from 'react-transition-group';

import { Link } from "react-router-dom";
import jpLogo from '../JPLogo.svg';
import logo from '../logo.svg';

import './Home.scss';

export default function Home() {
    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
            <div className="container">
                <header className="headerStyle">
                    <img src={jpLogo} className="jpLogo" alt="jpLogo" />
                    <h1>Profiler App</h1>
                </header>
                <nav>
                    <Link className="jpBtn" to="/create">Vytvoř plán</Link>
                    <Link className="jpBtn" to="/load">Načti plán</Link>
                    <Link className="jpBtn" to="/catalog">Katalog</Link>
                    <Link className="jpBtn" to="/about">O aplikaci</Link>
                </nav>
                <footer className="footerStyle">
                    <p>Powered by ReactJS: </p>
                    <img src={logo} className="appLogo" alt="logo" />
                    <p>| Designed & Coded by Jiri Patroch</p>
                </footer>
            </div>
        </CSSTransition>
    )
}
