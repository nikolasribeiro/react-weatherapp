import React, { Component } from 'react'
import Clock from '../Clock/Clock';
import './Location.css';


export default class Location extends Component {
    render() {

        const {weather_location} = this.props;
        

        return (
            <div className="location-box">

                <div className="location"> {weather_location.name}, {weather_location.sys.country} </div>
                <div className="date"> <Clock></Clock> </div>

            </div>
        )
    }
}
