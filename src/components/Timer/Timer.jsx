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
import { formatTime } from "../../utils/formatTime";

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
            const addLap = formatTime(time);
            dispatch(newLap(addLap));
        }
    }

    return (
        <div>
            <p>
                {formatTime(time)}
            </p>
            <div className="buttons">
                <button onClick={handleStartPause}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                {!isRunning ? (
                    <button onClick={handleReset}> Reset </button>
                ) : null}
                <button onClick={handleLap}> Lap </button>
            </div>
            <ul className="laps">
                {lap.map((lap, key) => (
                    <li key={key}>{lap}</li>
                ))}
            </ul>
        </div>
    );
};

export default Timer;
