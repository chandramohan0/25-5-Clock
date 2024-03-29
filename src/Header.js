import React from "react";
import LengthBtn from "./LengthButton";

function Header({breakLength, sessionLength, setBreakLength, setSessionLength}) {
 
  return (
    <div>
      <h1 className="text-5xl font-bold my-8 text-center">25 + 5 Clock</h1>
      <div className="flex justify-between">
        <LengthBtn text="Break Length" value={breakLength} set={setBreakLength} id="break-label" incrementId="break-increment" decrementId="break-decrement"/>
        <LengthBtn text="Session Length" value={sessionLength} set={setSessionLength} id="session-label" incrementId="session-increment" decrementId="session-decrement"/>
      </div>
    </div>
  );
}

export default Header;
