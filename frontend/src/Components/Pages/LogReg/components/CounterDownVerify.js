import React from "react";
import { useTimer } from "react-timer-hook";

function CounterDownVerify(props) {
     const {expiryTimestamp  ,HandleExpertContDown} = props;
    const { seconds, minutes, isRunning, start, pause, resume, restart } =
        useTimer({
            expiryTimestamp,
            onExpire: () => HandleExpertContDown(),
        });

    return (
        <div className="text-center text-xl">
            <span>{minutes}</span>:<span>{seconds}</span>
            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
            {/* <button onClick={start}>Start</button> */}
            {/* <button onClick={pause}>Pause</button> */}
            {/* <button onClick={resume}>Resume</button> */}
            {/* <button onClick={() => { */}
            {/* // Restarts to 5 minutes timer */}
            {/* const time = new Date(); */}
            {/* time.setSeconds(time.getSeconds() + 300); */}
            {/* restart(time) */}
            {/* }}>Restart</button> */}
        </div>
    );
}

export default CounterDownVerify;
