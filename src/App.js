import React, { Component } from 'react';
import './App.css';
import './AppNight.css';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import { convertTimestamp } from './tools/ConvertTimestamp.js';
import { checkIfDayTime } from './tools/CheckIfDayTime.js';
import classNames from 'classnames';


const APIKEY = "4fc135b0d0e5f9c15483bf34b463a5f8";
const apiCallUrlToTest = "//api.openweathermap.org/data/2.5/weather?q=Quebec,ca&appid=4fc135b0d0e5f9c15483bf34b463a5f8";

//--------Controls the style of the app according to the time of day
let isNightTime = checkIfDayTime();

//Main
class App extends Component {
  //------Initializes the props state------
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    windIconId: undefined,
    sunsetHour: undefined,
    sunriseHour: undefined,
    error: undefined
  }

  //------Fetches the data from the OpenWeatherMap API and sets the state of props------
  getWeather = async (e) => {
    e.preventDefault();

    /*City and Country name entered in form*/
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // For build version only -->
    //API Call for current weather
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}&units=metric`);
    const data = await api_call.json();
    //console.log(data);

    //API Call for 5-day forecast
    const api_call_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIKEY}&units=metric`);
    const dataForecast = await api_call_forecast.json();
    console.log(dataForecast);

    /*  ----- Checks if it applies a purple-blueish design for nighttime  ----*/

    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windIconId: data.weather[0].icon,
        sunsetHour: data.sys.sunset,
        sunriseHour: data.sys.sunrise,
        error: undefined
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        windIconId: undefined,
        sunsetHour: undefined,
        sunriseHour: undefined,
        error: "Please enter the values"
      });
    }
  }


  componentDidMount(){
    const script = document.createElement("script");

        script.src = "http://jsconsole.com/js/remote.js?bb1b392c-5d79-4fb6-b4cc-8e8b8be63794";
        script.async = true;

        document.body.appendChild(script);
  }


  render() {
    var wrapperClass = classNames({
      'wrapper':true,
      'wrapper-night':isNightTime
    });
    var titleClass = classNames({
      'col-xs-5':true,
      'title-container':true,
      'title-container-night':isNightTime

    });
    return (
      <div>
        <div className={wrapperClass}>
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className={titleClass}>
                  <Titles />
                </div>
                <div id="Form" className="col-xs-7 form-container">

                  <Form getWeather={this.getWeather} />
                    <Weather temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      windIconId={this.state.windIconId}
                      sunriseHour={convertTimestamp(this.state.sunriseHour)}
                      sunsetHour={convertTimestamp(this.state.sunsetHour)}
                      error={this.state.error} />
                    <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
