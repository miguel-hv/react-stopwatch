import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    selectCount,
} from "../../redux/reducers/counterSlice";
import {
    pauseTimer,
    resetTimer,
    selectTime,
    startTimer,
} from "../../redux/reducers/timerSlice";

const HUNDRETH_OF_SECOND = 10;

const Timer = () => {
    // const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lap, setLap] = useState([]);
    // let isRunning = false;
    const countRef = useRef(null);

    const dispatch = useDispatch();
    const time = useSelector(selectTime);

    const sum = 5;

    const count = useSelector(selectCount);

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
        }
    }

    function handleLap() {
        if (isRunning) {
            const newLap = formatTime();
            setLap([...lap, newLap]);
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
                {time}
                {/* {count} */}
                {/* {formatTime()} */}
            </div>
            <div>
                <button onClick={handleStartPause}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                {/* <button onClick={()=>dispatch(increment(sum))}>
                    +1
                </button> */}
                {/* <button onClick={()=>dispatch(decrement())}> */}
                {/* -1 */}
                {/* </button> */}
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
