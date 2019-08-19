import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './NewItemFormP1.scss';

export default class NewItemFormP1 extends Component {

    isActive = (value) => {
        if (this.props.selectedProfileCategory === value) {
            return true;
        } else {
            return false;
        }
    }

    render() {

        const { actualFormPage, nextPage, profilesData, selectCategory } = this.props

        let uniqueAray = [...new Set(profilesData.map(item => item.category))];

        if (actualFormPage !== 1) {
            return null;
        }

        return (
            <div className='newItemFormP1'>
                <h3>Vyberte profil:</h3>
                <hr />
                <div className='profileOptions'>
                    {uniqueAray.map((value, index) => (
                        <div key={index} className={this.isActive(value) ? ' profileOption active' : 'profileOption'} onClick={selectCategory.bind(this, value)} >
                            {value}
                        </div>
                    ))}
                </div>
                <div className='navigation'>
                    <Link to="/" className='jpBtnSm'>Zpět</Link>
                    <label className='jpBtnSm' onClick={nextPage}>Další</label>
                </div>
            </div >
        )
    }
}
