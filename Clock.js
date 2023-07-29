import React, { useState, useEffect } from "react";
import Clock from "./clock";

const App = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    // This is the cleanup function.
    const cleanup = () => {
      // Stop any background processes that are running.
    };

    // This is the array of dependencies.
    const dependencies = [];

    // This is the function that is called when the dependencies change.
    const effect = () => {
      // Do something here.
    };

    // Add the cleanup function to the useEffect hook.
    useEffect(effect, dependencies, cleanup);
  }, [time]);

  return (
    <div>
      <Clock time={time} setTime={setTime} />
    </div>
  );
};

export default App;