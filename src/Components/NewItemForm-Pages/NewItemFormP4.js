import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import data from "./../../Data/data";

import './NewItemFormP4.scss';

export default class NewItemFormP4 extends Component {


    sumCount(profilesToCut) {

        let sumCount = 0;

        profilesToCut.forEach(profile => {
            sumCount = Number(sumCount) + Number(profile.count)
        });

        return sumCount;
    }


    sumLenght(profilesToCut) {

        let sumLength = 0;

        profilesToCut.forEach(profile => {
            sumLength = Number(sumLength) + (Number(profile.length) * Number(profile.count))
        });

        return sumLength / 1000;
    }

    sumPrice(profilesToCut) {

        let sumPrice = 0;
        let selectedProfile = data.profiles.filter(profile => profile.name === this.props.selectedProfile);

        profilesToCut.forEach(profile => {
            sumPrice = Number(sumPrice) + ((Number(profile.length) / 1000) * Number(profile.count) * selectedProfile[0].price)
        });

        return sumPrice.toFixed(1);
    }



    render() {

        const { profilesToCut, actualFormPage, selectedProfile, projectNr, projectName } = this.props;

        if (actualFormPage !== 4) {
            return null;
        }

        return (
            < div className='newItemFormP4' >
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
                        <label>Počet položek [ks]:</label>
                        <h3>{this.sumCount(profilesToCut)}</h3>
                    </div>
                    <div className='sumContentBox'>
                        <label>Celková délka [m]:</label>
                        <h3>{this.sumLenght(profilesToCut)}</h3>
                    </div>
                    <div className='sumContentBox'>
                        <label>Celková cena [Kč]:</label>
                        <h3>{this.sumPrice(profilesToCut)}</h3>
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
            </div >
        )
    }
}

NewItemFormP4.propTypes = {
    profilesToCut: PropTypes.array,
    actualFormPage: PropTypes.number.isRequired,
    selectedProfile: PropTypes.string,
    projectNr: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    projectName: PropTypes.string.isRequired,


};