/**
 * injex.js
 *      This is the main file for the app.
 *
 * Author: Rohit Mehta
 */

// import List from "./List.js";
import { getList, addList, removeList, saveLocally, loadLocally } from "./data.js";
import { updateList, updateTaskList } from "./updateUIComponents.js";

import "./style.css";

// Global variable to keep track of current active list
let activeList = "default";

// Modal Boxes
const newTaskFormModalBox = document.querySelector(
    "div.modal-wrapper.new-task"
);
const newListFormModalBox = document.querySelector(
    "div.modal-wrapper.new-list"
);

//==============================================================================
// Following buttons are for above modal boxes.
//  - controls visibilty of the forms
//==============================================================================
const addNewTask = document.querySelector("button#new-task");
addNewTask.addEventListener("click", () => {
    console.log("Add task button clicked");
    newTaskFormModalBox.classList.remove("hidden");
    document.querySelector("input#title").focus();
});

const addNewList = document.querySelector("button#new-list");
addNewList.addEventListener("click", () => {
    console.log("Add list button clicked");
    newListFormModalBox.classList.remove("hidden");
    document.querySelector("input#list-name").focus();
});

const cancelBtns = Array.from(
    document.querySelectorAll('button[type="button"].cancel')
);
cancelBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        console.log("Clicked cancel button");
        newTaskFormModalBox.classList.add("hidden");
        newListFormModalBox.classList.add("hidden");
    });
});
//==============================================================================

const allForms = document.forms;
const newTaskForm = allForms["new-task"];
const newListForm = allForms["list-form"];
const listSelectionForm = allForms["list-selection"];

/**
 * Retrive a form data from a form element
 * @param {form} form A valid form element
 * @returns form data as a dictionary
 */
const getFormData = form => {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value.trim();
    }
    return data;
};

// console.log(allForms);

// set event listeners on each of the forms
newTaskForm.addEventListener("submit", e => {
    e.preventDefault();
    newTaskFormModalBox.classList.add("hidden");

    const data = getFormData(newTaskForm);
    console.log("Submitted new task form", data);
    getList(activeList).addTask(
        data.title,
        data.desc,
        data.dueDate,
        data.priority
    );

    // console.log(e);
    newTaskForm.reset();
    saveLocally();
    updateTaskList(activeList);
});

newListForm.addEventListener("submit", e => {
    e.preventDefault();
    newListFormModalBox.classList.add("hidden");

    const data = getFormData(newListForm);
    console.log("Submitted new list form", data);
    addList(data.name);
    activeList = data.name; // set the new list as active list

    newListForm.reset();
    // updateListName(activeList);
    saveLocally();
    updateList(activeList);
});

listSelectionForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = getFormData(listSelectionForm);
    console.log("Submitted list selection form", data);
    activeList = data.list;

    console.log("Active list is now", activeList);

    listSelectionForm.reset();
    // updateListName(activeList);
    // updateTaskList(activeList);
    saveLocally();
    updateList(activeList);
});

const deleteCurrentList = document.querySelector("button#del-list");
deleteCurrentList.addEventListener("click", () => {
    console.log("Delete list button clicked");
    if (activeList !== "default") {
        removeList(activeList);
        activeList = "default";
        saveLocally(); // update storage
        updateList(activeList); // update UI
    }
});
//==============================================================================

window.addEventListener("load", () => {
    // init();
    loadLocally();
    updateList(activeList);
});