/**
 * todo
 *
 *      A todo webapp
 *
 * injex.js
 *      This file connects the rest of app to the DOM. And,
 *      is also the entry point.
 *
 * Author: Rohit Mehta
 */

import pm from "./projectManager.js";
import Project from "./project.js";
import Task from "./task.js";

import "./style.css";

// const listSelectionForm = document.querySelector('form[name="project-lists"]');
// const currentList = document.querySelector("span.current-list");

// const listForm = document.querySelector('form[name="list-form"]');

const taskFormModal = document.getElementById("task-form-wrapper");
const listFormModal = document.getElementById("list-form-wrapper");

// This is Event-Oriented Programming:
// Event listeners are added to the DOM elements
// and the event handlers are defined in the event handlers
// and the event handlers are called when the event occurs.

const getFormData = form => {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
};

/**
 * Get a new task from the user
 */
const getNewTask = (() => {
    const taskForm = document.querySelector('form[name="task-form"]');

    // Event listeners for the task & new list form
    taskForm.addEventListener("submit", e => {
        e.preventDefault();
        const data = getFormData(taskForm);
        console.log(data);
        const task = new Task(data);
        // TODO: add this task to the current project
        // (current project is the one that is selected in the Project Manager)
        // STEPS: get current project, call its addTask method,
        // and redraw the list
        console.log(task);
        taskFormModal.classList.add("hidden");
    });
})();

const getNewList = (() => {
    const listForm = document.querySelector('form[name="list-form"]');

    // Event listeners for the new list form
    listForm.addEventListener("submit", e => {
        e.preventDefault();
        const data = getFormData(listForm);
        console.log(data);
        const project = new Project(data.name);
        // TODO: add this project to the project manager
        // set the current project to the new project
        console.log(project);
        listFormModal.classList.add("hidden");
    });
})();

// Getting the DOM handles for the new-task form and new-list form
const setUpModalControls = (() => {
    const newTaskBtn = document.getElementById("new-task");
    const newListBtn = document.getElementById("new-list");
    const cancelBtns = Array.from(document.querySelectorAll("button.cancel"));

    // Event listeners for the modal control
    newTaskBtn.addEventListener("click", () => {
        taskFormModal.classList.remove("hidden");
    });

    newListBtn.addEventListener("click", () => {
        listFormModal.classList.remove("hidden");
    });

    cancelBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            taskFormModal.classList.add("hidden");
            listFormModal.classList.add("hidden");
        });
    });
})();


// TODO: Event listeners for Task items like delete, edit, etc.

// TODO: Event listeners for Project items like delete, edit, etc.
