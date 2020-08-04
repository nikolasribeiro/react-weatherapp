import React from 'react';
import './App.css';
import './components/Clock/Clock';

//Custom Imports
import SearchInput from './components/SearchInput/SearchInput';
import Location from './components/Location/Location';
import WeatherBox from './components/WeatherBox/WeatherBox';
import AdvanceInfo from './components/AdvanceInfo/AdvanceInfo';

const API = {
    key : "6832370bf4d93fb2edf33b6ff5a4a382",
    base: "https://api.openweathermap.org/data/2.5/"
}



class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            query:"",
            weather: {},
            debug:"Montevideo"
        }
    }


    getWeather = evt => {
        if(evt.key === 'Enter'){
            fetch(`${API.base}weather?q=${this.state.query}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    this.setWeather(result);
                    this.setState({
                        query: ""
                    });
                    
                });
        }
    }

    setWeather(weather_info_from_API){
        this.setState({
            weather: weather_info_from_API
        });
    }


    handleSearchCountry = (e) => {

        this.setState({
            query: e.target.value
        });
        
    }

    render(){

        return (
            <div className={
                (typeof this.state.weather.main != "undefined") 
                ? (
                    (this.state.weather.main.temp > 20)
                    ? 'app warm'
                    :'App' )
                :'App' }>

                <main>
                    <div className="show">
                        <SearchInput  
                            query               = {this.state.query} 
                            handleSearchCountry = {this.handleSearchCountry} 
                            getWeather          = {this.getWeather}
                        >
                        </SearchInput>

                        { (typeof this.state.weather.main != "undefined") ? (
                            <div className="display-elements">
                                <Location 
                                    weather_location= {this.state.weather}
                                >
                                </Location>
                                <WeatherBox
                                    weather_box     = {this.state.weather}
                                ></WeatherBox>
                                <AdvanceInfo ></AdvanceInfo>
                            </div>

                        ) : ("") }
                    </div>

                </main>
            </div>
        );
    }
}

export default App;
