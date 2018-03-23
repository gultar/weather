import React from 'react';

class Titles extends React.Component{

  render() {
    return(
      <div>
        <h1 className="title-container__title"><b>What's the Weather?</b></h1>
        <p className="title-container__subtitle"><b>Find out temperature, conditions and more...</b></p>
        <div className="arrow-down"><span class="glyphicon glyphicon-chevron-down"></span></div>
      </div>
    );
  }
}

export default Titles;
