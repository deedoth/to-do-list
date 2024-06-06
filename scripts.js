// REtrieve todo from local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initiaze
document.addEventListener("DOMContentLoaded", function () {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteAllTasks());
    displayTasks();
});

function addTask() {
    const newTask = todoInput.ariaValueMax.trim();
    if (newTask !== "") {
        todo.push({
            Text: newTask,
            disabled: false;
        });
        saveToLocalStorage();
        //after saved, clear the input box. make it empty
        todoInput.value = "";
        // this will display all the task
        displayTasks();
    }
}

function deleteAllTasks() {
    // some logic
}

function displayTasks() {
    // some logic
}