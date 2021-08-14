const formatTime = (timer) => {
    const tenthOfSecondsFormatted = `0${timer % 6000}`.slice(-2);
    const seconds = `${Math.floor(timer / 100)}`;
    const secondsFormatted = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 6000)}`;
    const minutesFormatted = `0${minutes % 600}`.slice(-2);

    return `${minutesFormatted} : ${secondsFormatted} :  ${tenthOfSecondsFormatted}`;
};

export default formatTime;
