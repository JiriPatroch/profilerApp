import React, { Component } from 'react'

import './Pagination.scss'

export default class Pagination extends Component {

    isActualPage = (number) => {
        if (number === this.props.actualPage) {
            return true;
        }
    }

    render() {

        const { itemsPerPage, itemsOfProfiles } = this.props;
        const pageNumbers = [];
        const selectItemsPerPage = [5, 10, 15];

        let pagesCount = Math.ceil(itemsOfProfiles / itemsPerPage);

        for (let i = 1; i <= pagesCount; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className='pagination'>
                <div className='jpSelectBoxWrapper'>
                    <select
                        className='jpSelectBox'
                        onChange={this.props.setItemsPerPage}
                        value={itemsPerPage}>

                        {selectItemsPerPage.map(number => (
                            <option key={number}> {number} </option>
                        ))}

                    </select>
                </div>
                {pageNumbers.map(number => (
                    <label
                        className={this.isActualPage(number) ? 'jpBtnPagination active' : 'jpBtnPagination'}
                        key={number}
                        onClick={this.props.setPage.bind(this, number)}>
                        {number}
                    </label>
                ))}
            </div >
        )
    }
}
