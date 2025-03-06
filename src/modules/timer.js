let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

export function startTimer(updateUI, onComplete) {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            isRunning = false;
            onComplete();
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateUI(minutes, seconds);
        }
    }, 1000);
}

export function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

export function resetTimer(updateUI, defaultMinutes = 25) { 
    clearInterval(timer);
    isRunning = false;
    minutes = defaultMinutes;
    seconds = 0;
    updateUI(minutes, seconds);
}
