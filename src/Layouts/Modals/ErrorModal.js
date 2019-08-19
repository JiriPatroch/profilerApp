import React from 'react'
import { CSSTransition } from 'react-transition-group';

import './ErrorModal.scss';

export default function ErrorModal(props) {

    if (props.hasErrors === false) {
        return null;
    } else {
        return (
            <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                <div className='errorModal'>
                    <div className='jpCard'>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <label className='jpBtnSm' onClick={props.close}>Ok</label>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

