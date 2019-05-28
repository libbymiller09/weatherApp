import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WeatherDay extends Component {
  render() {
    // const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    // function dayOfWeek(days) {
    //   return days[Math.floor(Math.random() * days.length)]
    // };
    return (
      <div className='day'>
        {/* <i class="fas fa-cloud"></i> */}
        {/* <i class="fas fa-sun"></i>
        <i class="fas fa-snowflake"></i>
        <i class="fas fa-cloud-showers-heavy"></i>
        <i class="fas fa-igloo"></i>
        <i class="fas fa-wind"></i>
        <i class="fas fa-cloud-sun-rain"></i>
        <i class="fas fa-cloud-rain"></i> */}
        <button
          type='button'>
          <Link to='/days' />
          <h2>
            <span>
              <i class="fas fa-cloud-rain"></i>
            </span>
              {weatherOfTheDay(weather)}
          </h2>
        </button>
      </div>
    );
  }
}

const weather = [
  'Sunny hi: 80°', 
  'Partly Cloudy hi: 75°',
  'Cloudy hi: 65°',
  'Rain hi: 50°',
  'Snow hi: 25°',
  'Windy hi: 65°',
  'Ice hi: 10°'
];

function weatherOfTheDay(weather) {
  return weather[Math.floor(Math.random() * weather.length)]
};

export default WeatherDay;