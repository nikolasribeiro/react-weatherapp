import React, { Component } from 'react'
import './WeatherBox.css';


export default class WeatherBox extends Component {
    
    render() {

        const {weather_box} = this.props;
        const icon_weather  = "http://openweathermap.org/img/w/"+weather_box.weather[0].icon+".png";

        return (

            <div className="weather-box">
                <div className="temp">
                    { Math.round(weather_box.main.temp) }°c
                </div>
                <div className="weather">
                    {weather_box.weather[0].main} <img src={icon_weather} alt="Weather Icon"/>
                </div>
            </div>
        )
    }
}
