import React, { Component } from 'react'
import './SearchInput.css'


export default class SearchInput extends Component {

    render() {
        const {handleSearchCountry, query, getWeather} = this.props;

        return (
            <div className="search-box">
                
                <input 
                    type        = "text" 
                    className   = "search-bar" 
                    placeholder = "Buscar..." 
                    value       = {query} 
                    onChange    = {handleSearchCountry} 
                    onKeyPress  = {getWeather}
                />

            </div>
        )
    }
}
