document.getElementById("login").addEventListener("click", () => {
    let user = prompt("Enter your username:");
    if (user) {
        localStorage.setItem("user", user);
        updateLoginStatus();
    }
});

function updateLoginStatus() {
    let user = localStorage.getItem("user");
    if (user) {
        document.getElementById("login").textContent = `👤 ${user} (Logout)`;
        document.getElementById("login").addEventListener("click", () => {
            localStorage.removeItem("user");
            location.reload();
        });
    }
}

updateLoginStatus();
