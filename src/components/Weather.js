import React from 'react';

const Weather = ({state}) => {
  return (
    <div>
      {state.city && state.country && (
        <p>
          Location: {state.city}, {state.country}{' '}
        </p>
      )}
      {state.temperature && <p>Temperature: {state.temperature}</p>}
      {state.humidity && <p>Humidity: {state.humidity}</p>}
      {state.description && <p>Description: {state.description}</p>}
      {state.error && <p>Please enter your values</p>}
    </div>
  );
};

export default Weather;
