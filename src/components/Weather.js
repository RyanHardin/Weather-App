import React from 'react';

const Weather = ({state}) => {
  return (
    <div className="weather-info">
      {state.city && state.country && (
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {' '}
            {state.city}, {state.country}
          </span>
        </p>
      )}
      {state.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {state.temperature}</span>
        </p>
      )}
      {state.humidity && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value"> {state.humidity}</span>
        </p>
      )}
      {state.description && (
        <p className="weather__key">
          Description:
          <span className="weather__value"> {state.description}</span>{' '}
        </p>
      )}
      {state.error && (
        <p className="weather__value">Please enter your values</p>
      )}
    </div>
  );
};

export default Weather;
