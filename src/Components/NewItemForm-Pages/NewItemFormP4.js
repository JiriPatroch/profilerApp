import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './NewItemFormP4.scss';

export default class NewItemFormP4 extends Component {

    render() {

        const { profilesToCut, actualFormPage, selectedProfile, projectNr, projectName } = this.props;

        if (actualFormPage !== 4) {
            return null;
        }

        return (
            <div className='newItemFormP4'>
                <h3>Sumarizace</h3>
                <hr />
                <p style={{ color: '#66cd43', fontWeight: 'bold', fontSize: '1.3rem' }}>Plán byl úspěšně vytvořen</p>
                <div className='sumContent'>
                    <div className='sumContentBox'>
                        <label>Zakázka:</label>
                        <h3>{projectNr}</h3>
                    </div>
                    <div className='sumContentBox'>
                        <label>Označení:</label>
                        <h3>{projectName}</h3>
                    </div>
                    <div className='sumContentBox'>
                        <label>Profil:</label>
                        <h3>{selectedProfile}</h3>
                    </div>
                </div>
                <div className='sumContent'>
                    <div className='sumContentBox'>
                        <label>Počet položek:</label>
                        <h3>{profilesToCut.length}</h3>
                    </div>
                    <div className='sumContentBox'>
                        <label>Celková délka:</label>
                        <h3>???</h3>
                    </div>
                    <div className='sumContentBox'>
                        <label>Celková cena:</label>
                        <h3>???</h3>
                    </div>
                </div>
                <div className='sumContent'>
                    <div className='sumContentBox'>
                        <label>Kusovník PDF:</label>
                        <i className="fas fa-file-download"></i>
                    </div>
                    <div className='sumContentBox'>
                        <label>Nářezový plán PDF:</label>
                        <i className="fas fa-file-download"></i>
                    </div>
                </div>

                <div className='navigation'>
                    <Link to="/" className='jpBtnSm'>Domů</Link>
                </div>
            </div>
        )
    }
}

NewItemFormP4.propTypes = {
    hasErrors: PropTypes.bool
};