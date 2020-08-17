import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState('hot');

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature > 30) { return };
    setTemperatureValue(newTemperature);
    if (newTemperature >= 15) {
      setTemperatureColor('hot');
    }
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 1) { return };
    setTemperatureValue(newTemperature);
    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }
  };

	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={() => increaseTemperature()}>+</button>
				<button onClick={() => decreaseTemperature()}>-</button>
			</div>
		</div>
	);
};

export default App;