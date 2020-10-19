import React, { useState, useEffect } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [title, setTitle] = useState("Pomodoro");
  const [reset, setReset] = useState(25);

  useEffect(() => {
    if (minutes > 0 && seconds > 0 && isStarted) {
      const id = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(id);
    } else if (seconds === 0 && minutes > 0 && isStarted) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else if (minutes === 0 && seconds > 0 && isStarted) {
      const id = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(id);
    } else if (minutes === 0 && seconds === 0) {
      alert("Your time is up!!!");
    }
  }, [seconds]);

  const handleStart = () => {
    setIsStarted(true);
    setSeconds((seconds) => seconds + 1);
  };

  const handleStop = () => {
    setIsStarted(false);
  };

  return (
    <>
      <div className="nav">
        <ul>
          <li
            onClick={() => {
              setMinutes(25);
              setSeconds(0);
              setReset(25);
              setIsStarted(false);
              setTitle("Pomodoro");
            }}
          >
            Pomodoro
          </li>
          <li
            onClick={() => {
              setMinutes(5);
              setSeconds(0);
              setIsStarted(false);
              setReset(5);
              setTitle("Short break");
            }}
          >
            Short break
          </li>
          <li
            onClick={() => {
              setMinutes(10);
              setSeconds(0);
              setReset(10);
              setIsStarted(false);
              setTitle("Long break");
            }}
          >
            Long break
          </li>
        </ul>
      </div>
      <div className="timer">
        <p className="title">{title}</p>
        <div className="timer__container">
          <p>
            <span>{minutes}</span>:
            {seconds > 9 ? <span>{seconds}</span> : <span>0{seconds}</span>}
          </p>
        </div>
        <div className="timer__btnContainer">
          <button className="btn start" onClick={handleStart}>
            Start
          </button>
          <button className="btn stop" onClick={handleStop}>
            Stop
          </button>
          <button
            className="btn reset"
            onClick={() => {
              setSeconds(0);
              setMinutes(reset);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Timer;
