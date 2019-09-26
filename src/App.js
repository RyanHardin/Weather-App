import React, {useState} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

import axios from 'axios';
import './App.css';

const App = () => {
  const key = process.env.REACT_APP_API_KEY;

  const [state, setState] = useState({});

  const getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
        )
        .then(response =>
          setState({
            temperature: response.data.main.temp,
            city: response.data.name,
            country: response.data.sys.country,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            error: '',
          })
        )
        .catch(error => error.message);
    } else {
      setState({error: 'undefined'});
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="cols-xs-5 title-container">
                <Titles />
              </div>
              <div className="cols-xs-7 form-container">
                <Form getWeather={getWeather} />
                <Weather state={state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
