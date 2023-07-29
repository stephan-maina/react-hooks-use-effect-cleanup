import React from "react";

const Clock = ({ time, setTime }) => {
  return (
    <div>
      <h1>Clock</h1>
      <p>The current time is: {time}</p>
      <button onClick={() => setTime("00:00:00")}>Reset</button>
    </div>
  );
};

export default Clock;
