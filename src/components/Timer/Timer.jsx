import useTimer from "../../hook/useTimer";
import formatTime from "../../utils/formatTime";

const Timer = () => {

    const {
        timer,
        isRunning,
        lap,
        handleStartPause,
        handleReset,
        handleLap,
    } = useTimer(0);

    return (
        <div>
            <div>
                {/* {timer} */}
                {formatTime(timer)}
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
