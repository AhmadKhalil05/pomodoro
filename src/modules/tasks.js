document.getElementById("add-task").addEventListener("click", () => {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText) {
        let taskList = document.getElementById("task-list");
        let li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
