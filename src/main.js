import { startTimer, pauseTimer, resetTimer } from "./modules/timer.js";
import { updateUI, setActiveTab, updateStatusMessage } from "./modules/ui.js";
import { getWorkDuration, getShortBreakDuration, getLongBreakDuration } from "./modules/settings.js";
import "./auth.js";
import "./modules/tasks.js";
import "./style.css";
let mode = "work";
let workDuration = getWorkDuration();
let shortBreakDuration = getShortBreakDuration();
let longBreakDuration = getLongBreakDuration();

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        mode = tab.getAttribute("data-mode");
        setActiveTab(mode);
        resetTimer(updateUI, mode === "work" ? workDuration : mode === "shortBreak" ? shortBreakDuration : longBreakDuration);
        updateStatusMessage(mode === "work" ? "Time to focus!" : mode === "shortBreak" ? "Take a short break!" : "Enjoy your long break!");
    });
});

document.getElementById("start").addEventListener("click", () => {
    startTimer(updateUI, () => {
        playSound();
        showNotification("Time's up!");
    });
});

document.getElementById("pause").addEventListener("click", () => {
    pauseTimer();
});

document.getElementById("toggle-breaks").addEventListener("click", () => {
    mode = mode === "shortBreak" ? "longBreak" : "shortBreak";
    resetTimer(updateUI, mode === "shortBreak" ? shortBreakDuration : longBreakDuration);
    updateStatusMessage(mode === "shortBreak" ? "Take a short break!" : "Enjoy your long break!");
    setActiveTab(mode);
});
