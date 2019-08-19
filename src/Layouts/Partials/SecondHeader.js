import React from 'react'
import { Link } from "react-router-dom";

import jpLogo from '../../JPLogo.svg';

import './SecondHeader.scss';

export default function SecondHeader(props) {

    const changeTheme = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('app-theme', 'light');
        } else {
            document.documentElement.setAttribute('app-theme', 'dark');
        }
    }

    const checkTheme = () => {
        if (document.documentElement.attributes[0].nodeValue === 'dark') {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div className="secondHeader">
            <Link to="/"><img src={jpLogo} className="jpLogosecond" alt="jpLogo" /></Link>
            <h2>{props.title}</h2>
            <span className='bulbItem'>
                <input type="checkbox" onClick={changeTheme} defaultChecked={checkTheme()} />
                <i className="far fa-lightbulb bulb"></i>
            </span>
        </div>
    )
}
