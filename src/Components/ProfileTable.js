import React, { Component } from 'react'
import PropTypes from 'prop-types';

import data from "./../Data/data";

import './ProfileTable.scss'
import Pagination from '../Layouts/Partials/Pagination';

export default class ProfileTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilesData: data.profiles,
            perPage: 5,
            actualPage: 1
        }
    }

    setPage = (number) => {
        this.setState({ actualPage: number });
    }

    setItemsPerPage = (e) => {
        this.setState({ perPage: e.target.value })
        this.setState({ actualPage: 1 });
    }

    render() {
        const { profilesData, perPage, actualPage } = this.state;

        let lastCurrentItemIndex = actualPage * perPage;
        let firstCurrentItemIndex = lastCurrentItemIndex - perPage;

        const currentProfiles = profilesData.slice(firstCurrentItemIndex, lastCurrentItemIndex);

        const profiles = currentProfiles.map(profile => {
            return (
                <div key={profile.id} className='tableBody'>
                    <p>{profile.id}</p>
                    <p>{profile.name}</p>
                    <p>{profile.category}</p>
                    <p>{profile.quality}</p>
                    <p>{profile.defaultLength}</p>
                    <p>{profile.price}</p>
                </div >
            )
        })

        return (
            <div className='profileTable'>
                <div className='tableHeader'>
                    <p>Poř. číslo</p>
                    <p>Název</p>
                    <p>Kategorie</p>
                    <p>Jakost</p>
                    <p>Délka [mm]</p>
                    <p>Cena [kč/bm]</p>
                </div>
                {profiles}
                <Pagination
                    itemsOfProfiles={profilesData.length}
                    itemsPerPage={perPage} setPage={this.setPage}
                    setItemsPerPage={this.setItemsPerPage}
                    actualPage={actualPage}
                />
            </div >
        )
    }
}

ProfileTable.propTypes = {
    profilesData: PropTypes.object,
    perPage: PropTypes.number,
    actualPage: PropTypes.number
};