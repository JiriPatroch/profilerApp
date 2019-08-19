import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Storage from './../../Models/Storage';

import './NewItemFormP3.scss';
import NIFP3Input from './NIFP3Input';
import ErrorModal from './../../Layouts/Modals/ErrorModal';

export default class NewItemFormP3 extends Component {
    Storage = new Storage();

    constructor(props) {
        super(props)
        this.storage = new Storage();

        this.projectNrRef = React.createRef();
        this.projectNameRef = React.createRef();
        this.newItemIndex = '';

        this.state = {
            hasErrors: false
        }
    }

    closeModal = () => {
        this.setState({ hasErrors: false })
    }

    createDataToStore = () => {
        let payload = [];
        let projectInfo = [
            {
                "itemIndex": '',
                "profile": '',
                "projectName": '',
                "projectNr": ''
            }];

        projectInfo[0].itemIndex = this.newItemIndex;
        projectInfo[0].profile = this.props.selectedProfile;
        projectInfo[0].projectName = this.projectNameRef.current.value;
        projectInfo[0].projectNr = this.projectNrRef.current.value;

        payload.push(projectInfo, this.props.profilesToCut);

        return payload;

    }

    validateInputs = () => {

        this.newItemIndex = this.storage.setIndex();
        let projectData = this.createDataToStore();
        let regex = new RegExp('^[0-9]+$');
        let errors;

        this.props.profilesToCut.forEach(element => {
            if (!regex.test(element.count) || !regex.test(element.length)) {
                errors = true;
            }
        });

        if (errors) {
            this.setState({ hasErrors: true })
        } else {
            this.setState({ hasErrors: false })
            this.storage.addItem(this.newItemIndex, projectData);
            this.props.nextPage();
        }
    }

    render() {

        const { actualFormPage, previousPage, selectedProfile, profilesToCut, projectNr, projectName, addProfileToCut, removeItem, removeAll } = this.props;

        if (actualFormPage !== 3) {
            return null;
        }

        return (
            <div className='newItemFormP3'>
                <h3>Zadejte informace o zakázce:</h3>
                <hr />
                <div className='projectInfoContent'>
                    <div className='inputBox'>
                        <label>Zvolený profil:</label>
                        <input type='text' disabled value={selectedProfile}></input>
                    </div>
                    <div className='inputBox'>
                        <label>Č. zakázky:</label>
                        <input type='text' ref={this.projectNrRef} onChange={projectNr}></input>
                    </div>
                    <div className='inputBox'>
                        <label>Označení:</label>
                        <input type='text' ref={this.projectNameRef} onChange={projectName}></input>
                    </div>
                </div>
                <h3>Vyplňte údaje:</h3>
                <hr />
                <div className='menu'>
                    <label className='jpBtnSm' onClick={removeAll}>Smaž vše</label>
                    <label className='jpBtnSm' style={{ width: 'auto' }} onClick={addProfileToCut}>Přidej položku</label>
                </div>
                <div className='dataContent'>
                    {profilesToCut.map((value, index) => (
                        <NIFP3Input
                            key={index}
                            profileValues={value}
                            updateValue={this.props.updateValue}
                            removeItem={removeItem}
                            index={index}
                        />
                    ))}
                </div>
                <div className='navigation'>
                    <label className='jpBtnSm' onClick={previousPage}>Zpět</label>
                    <label className='jpBtnSm' onClick={this.validateInputs}>Vypočítej</label>
                </div>
                <ErrorModal title='Chyba' description='Délka a počet musí být celé číslo větší než 0' close={this.closeModal} hasErrors={this.state.hasErrors} />
            </div >
        )
    }
}

NewItemFormP3.propTypes = {
    hasErrors: PropTypes.bool
};