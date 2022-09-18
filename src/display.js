/**
 * display.js
 *      Provides the functions to display the lists and tasks
 *
 * Author: Rohit Mehta
 */

import { getList, getListNames } from "./data.js";

// The DOM element which has all the tasks as its children
const parentUl = document.querySelector("ul.task-list");

const updateTaskList = d => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskList = getList(d);
    const tasks = taskList.tasks;

    console.log({ taskList });
    console.log(tasks);

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        let title = document.createElement("div");
        title.classList.add("title");
        let desc = document.createElement("div");
        desc.classList.add("description");
        let dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        let priority = document.createElement("div");
        priority.classList.add("priority");

        console.log(task.title);
        console.log(task.desc);
        console.log(task.dueDate);
        console.log(task.priority);

        title.textContent = task.title;
        desc.textContent = task.desc;
        dueDate.textContent = task.dueDate;
        priority.textContent = task.priority;

        taskDiv.appendChild(title);
        taskDiv.appendChild(desc);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(priority);

        taskItem.appendChild(taskDiv);
        parentUl.appendChild(taskItem);
    });

    // TODO: create a task item node for each task in the list
    // TODO: then add it to the taskListParent
};

const updateList = d => {
    const lists = getListNames();

    console.log(lists);
    // TODO: add <option> to the list selection form <select> element
    //       for each list in the list of lists
};

export { updateList, updateTaskList };
