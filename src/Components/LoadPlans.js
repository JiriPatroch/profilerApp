import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import SecondHeader from '../Layouts/Partials/SecondHeader';

import Storage from './../Models/Storage';

import './ProfileTable.scss';

export default class LoadPlans extends Component {
    constructor(props) {
        super(props)
        this.storage = new Storage();

        this.state = {
            projectData: null
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let storageData = this.storage.getAllItems();
        if (storageData.length === 0) {
            return null;
        } else {
            this.setState({ projectData: storageData.reverse() });
        }
    }

    removeAll = () => {
        this.storage.removeAllItems();
        this.setState({ projectData: null });
    }

    remove = (index) => {
        localStorage.removeItem(index);
        this.setState({
            projectData: this.state.projectData.filter(element => element[0][0].itemIndex !== index)
        });
    }

    render() {

        const { projectData } = this.state;

        if (projectData === null) {
            return (
                <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                    <div className="container">
                        <div className="profileTable">
                            <SecondHeader title='Nářezové plány' />
                            <label className='jpBtnSm' style={{ marginTop: '1rem' }} onClick={() => this.props.history.goBack()}>Zpět</label>
                            <h3 style={{ textAlign: 'center' }}>Nenalezeno</h3>
                        </div>
                    </div>
                </CSSTransition>
            )
        } else {
            return (
                <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                    <div className="container">
                        <div className="profileTable">
                            <SecondHeader title='Nářezové plány' />
                            <div className='menu'>
                                <label className='jpBtnSm' onClick={() => this.props.history.goBack()}>Zpět</label>
                                <label className='jpBtnSm' onClick={this.removeAll}>Smaž vše</label>
                            </div>
                            <div className='tableHeader'>
                                <p style={{ maxWidth: '100px' }}>Poř. číslo</p>
                                <p>Č. projektu</p>
                                <p>Název</p>
                                <p>Profil</p>
                                <p>Kusovník</p>
                                <p>Nážezový plán</p>
                                <p>Akce 1</p>
                                <p>Akce 2</p>

                            </div>
                            {projectData.map((element, index) => (
                                <div className='tableBody' key={index}>
                                    <p style={{ maxWidth: '100px' }}>{index + 1}</p>
                                    <p>{element[0][0].projectNr}</p>
                                    <p>{element[0][0].projectName}</p>
                                    <p>{element[0][0].profile}</p>
                                    <p><i className="fas fa-file-download"></i></p>
                                    <p><i className="fas fa-file-download"></i></p>
                                    <Link to={{
                                        pathname: "/load/" + index, state: {
                                            payload: element
                                        }
                                    }}>
                                        <p>Edituj</p></Link>
                                    <p style={{ cursor: 'pointer' }} onClick={this.remove.bind(this, element[0][0].itemIndex)} >Smaž</p>
                                </div>

                            ))}
                        </div>
                    </div>
                </CSSTransition>
            )
        }
    }
}

LoadPlans.propTypes = {
    projectData: PropTypes.array,
};