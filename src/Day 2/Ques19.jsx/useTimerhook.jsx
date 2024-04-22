/*19.Build a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.
*/
import React, { useEffect, useState } from 'react';

const useTimerhook = (duration) => {
    const [currenttime, setCurrenttime] = useState(duration);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (running) {
            intervalId = setInterval(() => {
                if (currenttime > 0) {
                    setCurrenttime(currenttime - 1);
                } else {
                    clearInterval(intervalId);
                    setRunning(false);
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [running, currenttime]);

    const startTimer = () => {
        setRunning(true);
    };

    const pauseTimer = () => {
        setRunning(false);
    };

    const resetTimer = () => {
        setCurrenttime(duration);
        setRunning(false);
    };

    return { currenttime, startTimer, pauseTimer, resetTimer };
};

export default useTimerhook;


