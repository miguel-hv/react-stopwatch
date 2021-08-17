export const formatTime = (time)=> {
    const tenthOfSecondsFormatted = `0${time % 6000}`.slice(-2);
    const seconds = `${Math.floor(time / 100)}`;
    const secondsFormatted = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 6000)}`;
    const minutesFormatted = `0${minutes % 600}`.slice(-2);

    return `${minutesFormatted} : ${secondsFormatted} :  ${tenthOfSecondsFormatted}`;
}