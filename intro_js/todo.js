let taskList = [];

window.addEventListener('DOMContentLoaded', () => {
    let addButton = document.getElementById("add");
    let entry = document.getElementById("entry");
    let list = document.getElementById("task-list")
    addButton.addEventListener("click", event => {
        event.preventDefault();
        let newTask = entry.value;
        let newItem = document.createElement("li");
        newItem.innerHTML = newTask;
        list.appendChild(newItem);
        entry.value = "";
    });
})