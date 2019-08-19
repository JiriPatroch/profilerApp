import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import SecondHeader from '../Layouts/Partials/SecondHeader';
import NewItemFormP1 from './NewItemForm-Pages/NewItemFormP1';
import NewItemFormP2 from './NewItemForm-Pages/NewItemFormP2';
import NewItemFormP3 from './NewItemForm-Pages/NewItemFormP3';
import NewItemFormP4 from './NewItemForm-Pages/NewItemFormP4';

import data from "./../Data/data";

export default class NewItemForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profilesData: data.profiles,
            actualFormPage: 1,
            endFormPage: 4,
            selectedProfileCategory: 'IPE',
            selectedProfileDimension: '120',
            projectNr: '',
            projectName: '',
            profilesToCut: [{
                "name": '',
                "length": '',
                "count": '',
                "process": ''
            }]
        }
    }

    previousPage = () => {
        if (this.state.actualFormPage === 1) {
            return;
        } else {
            this.setState({ actualFormPage: this.state.actualFormPage - 1 })
        }
    }

    nextPage = () => {
        if (this.state.actualFormPage === this.state.endFormPage) {
            return;
        } else {
            this.setState({ actualFormPage: this.state.actualFormPage + 1 })
        }
    }

    selectCategory = (value) => {
        this.setState({ selectedProfileCategory: value })
        this.selectedProfile();
    }

    selectDimension = (e) => {
        this.setState({ selectedProfileDimension: e.target.value })
        this.selectedProfile();
    }

    selectedProfile = () => {
        return this.state.selectedProfileCategory.concat(this.state.selectedProfileDimension);
    }

    setProjectNr = (e) => {
        this.setState({ projectNr: e.target.value });
    }

    setProjectName = (e) => {
        this.setState({ projectName: e.target.value });
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

        const { actualFormPage, profilesData, profilesToCut, selectedProfileCategory, selectedProfileDimension, projectNr, projectName } = this.state;

        return (
            <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                <div>
                    <div className='container'>
                        <SecondHeader title='Nový plán' />

                        <NewItemFormP1
                            actualFormPage={actualFormPage}
                            previousPage={this.previousPage}
                            nextPage={this.nextPage}
                            profilesData={profilesData}
                            selectedProfileCategory={selectedProfileCategory}
                            selectCategory={this.selectCategory}
                        />
                        <NewItemFormP2
                            actualFormPage={actualFormPage}
                            previousPage={this.previousPage}
                            nextPage={this.nextPage}
                            profilesData={profilesData}
                            selectedProfileDimension={selectedProfileDimension}
                            selectDimension={this.selectDimension}
                        />
                        <NewItemFormP3
                            actualFormPage={actualFormPage}
                            previousPage={this.previousPage}
                            nextPage={this.nextPage}
                            profilesData={profilesData}
                            selectedProfile={this.selectedProfile()}
                            projectNr={this.setProjectNr}
                            projectName={this.setProjectName}
                            profilesToCut={profilesToCut}
                            addProfileToCut={this.addProfileToCut}
                            updateValue={this.updateValue}
                            removeItem={this.removeItem}
                            removeAll={this.removeAll}
                        />

                        <NewItemFormP4
                            actualFormPage={actualFormPage}
                            profilesData={profilesData}
                            profilesToCut={profilesToCut}
                            projectNr={projectNr}
                            projectName={projectName}
                            selectedProfile={this.selectedProfile()}
                        />
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

NewItemForm.propTypes = {
    profilesData: PropTypes.object,
    actualFormPage: PropTypes.number,
    endFormPage: PropTypes.number,
    selectedProfileCategory: PropTypes.string,
    selectedProfileDimension: PropTypes.string,
    projectNr: PropTypes.string,
    projectName: PropTypes.string,
    profilesToCut: PropTypes.number
};