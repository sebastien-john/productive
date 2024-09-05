import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Clock() {
  const [timerOn, setTimerOn] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(5);
  const [minutesRemaining, setMinutesRemaining] = useState(0);

  function createDivStyle(customWidth:number) {
    const divStyle = {
      width: customWidth + "%",
    };
    return divStyle
  }

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (timerOn) {
      console.log(minutesRemaining);
      intervalId = setInterval(() => setMinutesRemaining(minutesRemaining - 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerOn, minutesRemaining]);

  // TODO: Add a totalMinutes state, make it so that you can set the minutes remaining by clicking start focus session
  // TODO: Make it so that when you click start focus session, the screen changes so that you can see a progress bar of sorts
  // ... instead of the input field, conditional rendering.
  // TODO: additional logic to increment/decrement totalMinutes by clicking + or -, and having a max and min number of minutes
  // TODO: conditional rendering of the buttons so that you only see the stop button while the timer is going
  // TODO: more sophisticated UI, a more fitting input field, could try to replicate some of the smoothness of the windows app

  return (
    <>
      {timerOn === false ? (
        <>
          <h1> {totalMinutes} </h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setTimerOn(!timerOn);
              setMinutesRemaining(totalMinutes);

              console.log(totalMinutes);
            }}
          >
            start focus session
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTotalMinutes(totalMinutes + 5)}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTotalMinutes(Math.max(5, totalMinutes - 5))}
          >
            -
          </button>
        </>
      ) : (
        <>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-bar" style={createDivStyle(100*minutesRemaining/totalMinutes)}>
              {minutesRemaining} minutes remaining
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setTimerOn(!timerOn);
              setMinutesRemaining(totalMinutes);
            }}
          >
            restart focus session
          </button>
        </>
      )}
    </>
  );
}

export default Clock;
