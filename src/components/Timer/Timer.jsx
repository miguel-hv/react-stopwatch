import { useRef, useState } from "react";

const ONE_SECOND = 100; 

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    // let isRunning = false;
    const countRef = useRef(null);

    function handleStart() {
        if(!isRunning) {    
            countRef.current =  setInterval(()=>{setTimer(timer => timer + 1)}, 1 * ONE_SECOND);
            setIsRunning(true);
            // console.log(isRunning);
        } 
    }

    function handlePause() {
        clearInterval(countRef.current);
        setIsRunning(false);
        // console.log(isRunning);

    }

    // function handleResume() {
    //     countRef.current =  setInterval(()=>{setTimer(timer => timer + 1)}, 1 * ONE_SECOND);
    //     setIsRunning(true);
    //     // console.log(isRunning);

    // }

    return (
        <div>
            <div> {timer} </div>
            <div>
                <button onClick={handleStart}>
                {isRunning ? 
                    "Resume" :
                    "Start" 
                } 
                </button>
                <button onClick={handlePause}> Pause </button>
                {/* <button onClick={handleResume}> Resume </button> */}
            </div>
        </div>
    );
};

export default Timer;
