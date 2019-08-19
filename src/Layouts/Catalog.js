import React from 'react'
import { CSSTransition } from 'react-transition-group';

import ProfileTable from '../Components/ProfileTable';
import SecondHeader from './Partials/SecondHeader';

import './Catalog.scss';

export default function Catalog(props) {
    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
            <div className="container">
                <div className="catalog">
                    <SecondHeader title='Katalog' />
                    <label className='jpBtnSm' onClick={() => props.history.goBack()}>Zpět</label>
                    <ProfileTable />
                </div>
            </div>
        </CSSTransition>
    )
}