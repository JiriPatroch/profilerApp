import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

import './NIFP3Input.scss';

export default class NIFP3Input extends Component {
    render() {
        return (
            <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
                <div className='NIFP3Input'>
                    <div className='indexField'>{this.props.index + 1}</div>

                    <input type='text' name='name' placeholder='Označení položky'
                        value={this.props.profileValues.name}
                        onChange={this.props.updateValue.bind(this, this.props.index)}
                        autoComplete='off'
                    />

                    <input type='text' name='length' placeholder='Délka položky [mm]'
                        value={this.props.profileValues.length}
                        onChange={this.props.updateValue.bind(this, this.props.index)}
                        autoComplete='off'
                    />

                    <input type='text' name='count' placeholder='Počet Kusů'
                        value={this.props.profileValues.count}
                        onChange={this.props.updateValue.bind(this, this.props.index)}
                        autoComplete='off'
                    />

                    <input type='text' name='process' placeholder='Technologická poznámka'
                        value={this.props.profileValues.process}
                        onChange={this.props.updateValue.bind(this, this.props.index)}
                        autoComplete='off'
                    />

                    <div className='removeField' onClick={this.props.removeItem.bind(this, this.props.index)}>✕</div>
                </div>
            </CSSTransition>
        )
    }
}
