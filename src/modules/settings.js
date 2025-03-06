export function getWorkDuration() {
    return parseInt(localStorage.getItem("workDuration")) || 25;
}

export function getShortBreakDuration() {
    return parseInt(localStorage.getItem("shortBreakDuration")) || 5;
}

export function getLongBreakDuration() {
    return parseInt(localStorage.getItem("longBreakDuration")) || 15;
}

export function setDurations(work, shortBreak, longBreak) {
    localStorage.setItem("workDuration", work);
    localStorage.setItem("shortBreakDuration", shortBreak);
    localStorage.setItem("longBreakDuration", longBreak);
}
