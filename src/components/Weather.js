import React from 'react';
import './Weather.css';
import { checkIfDayTime } from '../tools/CheckIfDayTime.js';
import classNames from 'classnames';


var weatherKeyClass = classNames({
  'weather__key':true,
  'weather__key-night': checkIfDayTime()
});

var weatherValueClass = classNames({
  'weather__value':true,
  'weather__value-night': checkIfDayTime()
});


const Weather = props => (
  <div className="weather__info">
  {
    props.city && props.country && <p className={weatherKeyClass}>Location:
    <span className="weather__value"> {props.city}, {props.country}</span></p>
  }
  {
    props.temperature && <p className={weatherKeyClass}>Temp:
    <span className="weather__value"> {props.temperature}°</span>  <img src={"http://openweathermap.org/img/w/" + props.windIconId + ".png"} alt=""/>  </p>
  }
  {
    props.humidity && <p className={weatherKeyClass}>Humidity:
    <span className="weather__value"> {props.humidity}%</span></p>
  }
  {
    props.humidity && <p className={weatherKeyClass}>Sunrise Hour:
    <span className="weather__value"> {props.sunriseHour}</span></p>
  }
  {
    props.humidity && <p className={weatherKeyClass}>Sunset Hour:
    <span className="weather__value"> {props.sunsetHour}</span></p>
  }
  {
    props.description && <p className={weatherKeyClass}>Description:
    <span className="weather__value"> {props.description}</span></p>
  }

  {
    props.error && <p className={weatherKeyClass}>{props.error}</p>
  }
  </div>
);

export default Weather;
