import React, { Component } from 'react'

import './NewItemFormP2.scss';

export default class NewItemFormP2 extends Component {

    render() {
        const { actualFormPage, previousPage, nextPage, profilesData, selectDimension, selectedProfileDimension } = this.props

        let uniqueAray = [...new Set(profilesData.map(item => item.dimensions))];

        if (actualFormPage !== 2) {
            return null;
        }

        return (
            <div className='newItemFormP2'>
                <h3>Vyberte rozměr:</h3>
                <hr />
                <div className='jpSelectBoxWrapper'>
                    <select className='jpSelectBox' value={selectedProfileDimension} onChange={selectDimension}>
                        {uniqueAray.map((value, index) => (
                            <option key={index}> {value}</option>
                        ))}
                    </select>
                </div>
                <div className='navigation'>
                    <label className='jpBtnSm' onClick={previousPage}>Zpět</label>
                    <label className='jpBtnSm' onClick={nextPage}>Další</label>
                </div>
            </div >
        )
    }
}
