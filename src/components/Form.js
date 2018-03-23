import React from 'react';
import './Form.css';
import '../AppNight.css';
import classNames from 'classnames';
import { checkIfDayTime } from '../tools/CheckIfDayTime.js';

let isNightTime=checkIfDayTime();

class Form extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var buttonClass = classNames({
      'button-night':isNightTime
    });

    var inputClass = classNames({
      'input-night':isNightTime
    });
    return(
      <form onSubmit={this.props.getWeather}>
      <input className={inputClass} type="text" name="city" placeholder="City..."/>
      <input className={inputClass} type="text" name="country" placeholder="Country..."/>
      <button className={buttonClass}>Get Weather</button>
      </form>
    );


  }



}

export default Form;
