import React, { Component } from 'react'
import './AdvanceInfo.css';


export default class AdvanceInfo extends Component {

    render() {

        const {debug} = this.props;

        return (

            <button className="btn_advance" onClick={debug}>
                Advance Info
            </button>

        )
    }
}
