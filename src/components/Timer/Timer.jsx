import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    newLap,
    selectLap,
    resetLap, 
} from "../../redux/reducers/lapsSlice";
import {
    pauseTimer,
    resetTimer,
    selectTime,
    startTimer,
} from "../../redux/reducers/timerSlice";

const HUNDRETH_OF_SECOND = 10;

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const countRef = useRef(null);

    const dispatch = useDispatch();
    const time = useSelector(selectTime);
    const lap = useSelector(selectLap);


    function handleStartPause() {
        if (!isRunning) {
            countRef.current = setInterval(() => {
                dispatch(startTimer());
            }, 1 * HUNDRETH_OF_SECOND);
            setIsRunning(true);
        } else {
            dispatch(pauseTimer(countRef.current));
            setIsRunning(false);
        }
    }

    function handleReset() {
        if (!isRunning) {
            dispatch(resetTimer(countRef.current));
            dispatch(resetLap());
        }
    }

    function handleLap() {
        if (isRunning) {
            const addLap = formatTime();
            dispatch(newLap(addLap));
        }
    }

    function formatTime() {
        const tenthOfSecondsFormatted = `0${time % 6000}`.slice(-2);
        const seconds = `${Math.floor(time / 100)}`;
        const secondsFormatted = `0${seconds % 60}`.slice(-2);
        const minutes = `${Math.floor(time / 6000)}`;
        const minutesFormatted = `0${minutes % 600}`.slice(-2);

        return `${minutesFormatted} : ${secondsFormatted} :  ${tenthOfSecondsFormatted}`;
    }

    return (
        <div>
            <div>
                {formatTime()}
            </div>
            <div>
                <button onClick={handleStartPause}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                {!isRunning ? (
                    <button onClick={handleReset}> Reset </button>
                ) : null}
                <button onClick={handleLap}> Lap </button>
            </div>
            <ul>
                {lap.map((lap, key) => (
                    <li key={key}>{lap}</li>
                ))}
            </ul>
        </div>
    );
};

export default Timer;
