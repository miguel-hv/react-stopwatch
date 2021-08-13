import { useRef, useState } from "react";

const HUNDRETH_OF_SECOND = 10;

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    // let isRunning = false;
    const countRef = useRef(null);

    function handleStartPause() {
        if (!isRunning) {
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1 * HUNDRETH_OF_SECOND);
            setIsRunning(true);
            // console.log(isRunning);
        } else {
            clearInterval(countRef.current);
            setIsRunning(false);
        }
    }

    function handleReset() {
        if (!isRunning) {
            clearInterval(countRef.current);
            setTimer(0);
        }
    }

    function formatTime() {

        const tenthOfSecondsFormatted = `0${timer % 6000}`.slice(-2);
        const seconds = `${Math.floor(timer / 100)}`;
        const secondsFormatted = `0${seconds % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 6000)}`;
        const minutesFormatted = `0${minutes % 600}`.slice(-2);

        return `${minutesFormatted} : ${secondsFormatted} :  ${tenthOfSecondsFormatted}`;
    }

    return (
        <div>
            <div> 
                {/* {timer} */}
                {formatTime()}
            </div>
            <div>
                <button onClick={handleStartPause}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                {!isRunning ? (
                    <button onClick={handleReset}> Reset </button>
                ) : null}
                {/* <button onClick={handleResume}> Resume </button> */}
            </div>
        </div>
    );
};

export default Timer;
