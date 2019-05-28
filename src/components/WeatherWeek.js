import React, { Component } from 'react';
import WeatherDay from './WeatherDay';

class WeatherWeek extends Component {
  render() {
    return(
      <div className='week'>
        <h2>Sun</h2>
        <WeatherDay />
        <h2>Mon</h2>
        <WeatherDay />
        <h2>Tues</h2>
        <WeatherDay />
        <h2>Wed</h2>
        <WeatherDay />
        <h2>Thurs</h2>
        <WeatherDay />
        <h2>Fri</h2>
        <WeatherDay />
        <h2>Sat</h2>
        <WeatherDay />
      </div>
    );
  }
}

export default WeatherWeek;
