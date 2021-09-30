import { useState } from "react";

const Clock = () => {
  let localTime = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(localTime);

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000);
  return (
    <>
      <div className="clock-app">
        <h1 className="title">Current Time</h1>
        <h1>{currentTime}</h1>
      </div>

    </>
  )
}

export default Clock;