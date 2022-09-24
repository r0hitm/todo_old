/**
 * updateUIComponents.js
 *      Provides functions to update various UI components
 *
 * Author: Rohit Mehta
 */

import { getList, getListNames, saveLocally } from "./data.js";

const updateTaskList = d => {
    // DOM element to display the tasks
    const ul = document.querySelector("ul.task-list");
    ul.textContent = ""; // clear previous list
    const tasks = getList(d).tasks;
    // const tasks = taskList.tasks;

    // console.log({ taskList });
    // console.log(tasks);

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        const title = document.createElement("div");
        title.classList.add("title");
        const desc = document.createElement("div");
        desc.classList.add("description");
        const dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        const priority = document.createElement("div");
        priority.classList.add("priority");
        const button = document.createElement("button");
        button.classList.add("edit");
        button.setAttribute("type", "button");
        button.textContent = "Mark Complete";

        button.addEventListener("click", e => {
            console.log("'Mark Complete' button clicked");
            // console.log(e);
            // console.log(e.path[1].childNodes[0].textContent);
            getList(d).removeTask(e.path[1].childNodes[0].textContent);
            // console.log(tasks);
            saveLocally();
            updateTaskList(d);
        });

        // console.log(task.title);
        // console.log(task.desc);
        // console.log(task.dueDate);
        // console.log(task.priority);
        // console.log(task.isComplete);

        title.textContent = task.title;
        desc.textContent = task.desc;
        dueDate.textContent = task.dueDate;
        priority.textContent = task.priority;

        taskDiv.appendChild(title);
        taskDiv.appendChild(desc);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(priority);
        taskDiv.appendChild(button);

        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.appendChild(taskDiv);
        ul.appendChild(taskItem);
    });
};

const updateListName = name => {
    const output = document.querySelector("output.current-list");
    output.textContent = 'Current List: ' + name;
};

const updateList = d => {
    const select = document.querySelector("select#list");
    select.textContent = "";
    const lists = getListNames();

    // console.log(lists);

    lists.forEach(list => {
        const option = document.createElement("option");
        option.textContent = list;
        option.value = list;
        select.appendChild(option);
    });

    updateListName(d);
    updateTaskList(d);
};

export { updateList, updateTaskList };
