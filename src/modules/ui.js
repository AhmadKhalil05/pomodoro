export function updateUI(minutes, seconds) {
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

export function setActiveTab(mode) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    document.querySelector(`[data-mode="${mode}"]`).classList.add("active");
}

export function updateStatusMessage(message) {
    document.getElementById("status-message").textContent = message;
}
