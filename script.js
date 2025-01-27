const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");
const hours = document.getElementById("hours");
const minutesTens = document.getElementById("minutes-tens");
const minutesUnits = document.getElementById("minutes-units");
const secondsTens = document.getElementById("seconds-tens");
const secondsUnits = document.getElementById("seconds-units");
const millisecondsTens = document.getElementById("milliseconds-tens");
const millisecondsUnits = document.getElementById("milliseconds-units");

let timerInterval;
let running = false;
let startTime;
let elapsedTime = 0;

function updateDisplay() {
    const totalMilliseconds = elapsedTime % 1000;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const hoursValue = totalHours % 24;
    const minutesValue = totalMinutes % 60;
    const secondsValue = totalSeconds % 60;
    const millisecondsValue = totalMilliseconds;

    hours.textContent = String(hoursValue).padStart(2, '0');
    minutesTens.textContent = String(Math.floor(minutesValue / 10));
    minutesUnits.textContent = String(minutesValue % 10);
    secondsTens.textContent = String(Math.floor(secondsValue / 10));
    secondsUnits.textContent = String(secondsValue % 10);
    millisecondsTens.textContent = String(Math.floor(millisecondsValue / 100));
    millisecondsUnits.textContent = String(Math.floor((millisecondsValue % 100) / 10));
}

function startTimer() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
