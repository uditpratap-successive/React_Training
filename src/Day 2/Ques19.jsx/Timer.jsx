import React from 'react';
import useTimerhook from './useTimerhook';

const Timer = () => {
    const { currenttime, startTimer, pauseTimer, resetTimer } = useTimerhook(300); // 300 seconds countdown

    return (
        <div>
            <h1>{currenttime}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
