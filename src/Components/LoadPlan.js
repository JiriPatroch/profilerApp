import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import SecondHeader from '../Layouts/Partials/SecondHeader';
import NewItemForm4 from './NewItemForm-Pages/NewItemFormP4';
import NIFP3Input from './NewItemForm-Pages/NIFP3Input';
import ErrorModal from './../Layouts/Modals/ErrorModal';

import Storage from './../Models/Storage';

import './ProfileTable.scss';
import './LoadPlan.scss';

export default class LoadPlan extends Component {
    constructor(props) {
        super(props)
        this.storage = new Storage();

        this.state = {
            hasErrors: false,
            profilesToCut: [],
            projectInfo: {},
            actualFormPage: 1
        }
    }

    componentDidMount() {
        this.setState({ profilesToCut: this.props.location.state.payload[1] });
        this.setState({ projectInfo: this.props.location.state.payload[0] });
    }

    closeModal = () => {
        this.setState({ hasErrors: false })
    }

    createDataToStore = () => {
        let payload = [];
        let projectInfo = this.props.location.state.payload[0];
        let profilesToCut = this.state.profilesToCut;

        payload.push(projectInfo, profilesToCut);

        return payload;
    }

    validateInputs = () => {

        let projectData = this.createDataToStore();
        let regex = new RegExp('^[0-9]+$');
        let errors;

        this.state.profilesToCut.forEach(element => {
            if (!regex.test(element.count) || !regex.test(element.length)) {
                errors = true;
            }
        });

        if (errors) {
            this.setState({ hasErrors: true })
        } else {
            this.setState({ hasErrors: false })
            this.storage.addItem(this.state.projectInfo[0].itemIndex, projectData);
            this.setState({ actualFormPage: 4 });
        }
    }

    addProfileToCut = () => {
        const obj = {
            "name": '',
            "length": '',
            "count": '',
            "process": ''
        }
        this.setState({ profilesToCut: this.state.profilesToCut.concat([obj]) })
    }

    updateValue = (id, el) => {
        const newArray = this.state.profilesToCut.map((profile, index) => {
            if (id !== index) {
                return profile;
            } else {
                return { ...profile, [el.target.name]: el.target.value }
            }
        });

        this.setState({ profilesToCut: newArray });
    }

    removeItem = (id) => {
        this.setState({ profilesToCut: this.state.profilesToCut.filter((el, index) => id !== index) })
    }

    removeAll = () => {
        const obj = [{
            "name": '',
            "length": '',
            "count": '',
            "process": ''
        }]
        this.setState({ profilesToCut: obj })
    }

    render() {

        const { profilesToCut, projectInfo, actualFormPage } = this.state;

        if (actualFormPage === 1) {

            return (
                <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                    <div className='container'>
                        <div className="profileTable">
                            <SecondHeader title='Editace plánu' />
                            <div className='projectInfoBox'>
                                <h3>Zakázka č.: {this.props.location.state.payload[0][0].projectNr}</h3>
                                <h3>Označení: {this.props.location.state.payload[0][0].projectName}</h3>
                                <h3>Profil: {this.props.location.state.payload[0][0].profile}</h3>
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='menu' style={{ justifyContent: 'flex-end' }}>
                                <label className='jpBtnSm' onClick={this.removeAll}>Smaž vše</label>
                                <label className='jpBtnSm' style={{ width: 'auto' }} onClick={this.addProfileToCut}>Přidej položku</label>
                            </div>
                            <div className='dataContent'>
                                {profilesToCut.map((value, index) => (
                                    <NIFP3Input
                                        key={index}
                                        profileValues={value}
                                        updateValue={this.updateValue}
                                        removeItem={this.removeItem}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='navigation'>
                            <label className='jpBtnSm' onClick={() => this.props.history.goBack()}>Zpět</label>
                            <label className='jpBtnSm' onClick={this.validateInputs}>Vypočítej</label>
                        </div>
                        <ErrorModal title='Chyba' description='Délka a počet musí být celé číslo větší než 0' close={this.closeModal} hasErrors={this.state.hasErrors} />
                    </div>
                </CSSTransition >
            )
        } else {
            return (
                <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                    <div className='container'>
                        <div className="profileTable">
                            <SecondHeader title='Editace plánu' />
                            <NewItemForm4
                                actualFormPage={actualFormPage}
                                profilesToCut={profilesToCut}
                                projectNr={projectInfo[0].projectNr}
                                projectName={projectInfo[0].projectName}
                                selectedProfile={projectInfo[0].profile}
                            />
                        </div>
                    </div>
                </CSSTransition>
            )
        }
    }
}

LoadPlan.propTypes = {
    hasErrors: PropTypes.bool,
    profilesToCut: PropTypes.array,
    projectInfo: PropTypes.array,
    actualFormPage: PropTypes.number
};