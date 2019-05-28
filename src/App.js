import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import WeatherWeek from './components/WeatherWeek';
import WeatherDay from './components/WeatherDay';
import './App.css';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/days/'>Days</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={WeatherWeek} />
        <Route path='/days/' component={WeatherDay} />
    
      </div>
    </Router>
  );
}

export default AppRouter;
