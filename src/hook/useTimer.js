import { useRef, useState } from "react";
import formatTime from "../utils/formatTime";

const HUNDRETH_OF_SECOND = 10;

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isRunning, setIsRunning] = useState(false);
    const [lap, setLap] = useState([]);
    const countRef = useRef(null);

    function handleStartPause() {
        if (!isRunning) {
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1 * HUNDRETH_OF_SECOND);
            setIsRunning(true);
        } else {
            clearInterval(countRef.current);
            setIsRunning(false);
        }
    }

    function handleReset() {
        if (!isRunning) {
            clearInterval(countRef.current);
            setTimer(0);
            setLap([]);
        }
    }

    function handleLap() {
        if (isRunning) {
            const newLap = formatTime(timer);
            setLap([...lap, newLap]);
        }
    }

    return {
        timer,
        isRunning,
        lap,
        handleStartPause,
        handleReset,
        handleLap,
    };
};

export default useTimer;
