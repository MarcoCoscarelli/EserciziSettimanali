import React, { useState } from 'react';
import './SpeedControlButton.css'; 

function SpeedControlButton({ onSpeedChange }) {
  const initialSliderValue = 5;
  const [sliderValue, setSliderValue] = useState(initialSliderValue); 

  const handleChange = (event) => {
   
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
    const maxSpeed = 10; 
    const minSpeed = 1; 
    const normalizedSpeed = (maxSpeed - newValue) + minSpeed;
    onSpeedChange(normalizedSpeed);
  };

  const increaseSpeed = () => {
    
    setSliderValue(prevValue => {
      const newValue = Math.min(10, prevValue + 1);
      handleChange({ target: { value: newValue } });
      return newValue;
    });
  };

  const decreaseSpeed = () => {
    
    setSliderValue(prevValue => {
      const newValue = Math.max(1, prevValue - 1);
      handleChange({ target: { value: newValue } });
      return newValue;
    });
  };

  return (
    <div className="speed-control-container">
      <label htmlFor="speed-slider" className="speed-slider-label">
       Atomo magico.
      </label>
      <div className="speed-slider-wrapper">
        <span className="speed-control-icon" onClick={decreaseSpeed}>-</span>
        <input
          id="speed-slider"
          type="range"
          min="1"
          max="10"
          step="1"
          value={sliderValue}
          onChange={handleChange}
          className="speed-slider"
        />
        <span className="speed-control-icon" onClick={increaseSpeed}>+</span>
      </div>
    </div>
  );
}

export default SpeedControlButton;