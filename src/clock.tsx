import { useState } from "react";

function Clock() {

    const [timerOn, setTimerOn] = useState(false);


  return (
    <>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="minutes"
      ></input>
      <button type="button" className="btn btn-primary" onClick={() => setTimerOn(!timerOn)}>
        start focus session
      </button>
      <button type="button" className="btn btn-primary" onClick={() => console.log(timerOn)}>+</button>
      <button type="button" className="btn btn-primary">-</button>
    </>
  );
}

export default Clock;
