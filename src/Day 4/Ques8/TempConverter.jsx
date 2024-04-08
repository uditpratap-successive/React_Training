//8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
//Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

import React, { useState } from 'react';

const TempConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        // Convert Celsius to Fahrenheit
        setFahrenheit(value * 9/5 + 32);
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        // Convert Fahrenheit to Celsius
        setCelsius((value - 32) * 5/9);
    };

    return (
        <>
            <label>Celsius</label>
            <input
                type='number'
                placeholder='Enter value in Celsius'
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <label>Fahrenheit</label>
            <input
                type='number'
                placeholder='Enter value in Fahrenheit'
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
        </>
    );
};

export default TempConverter;
