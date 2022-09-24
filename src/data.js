/**
 * data.js
 *      Provides the storage for the app
 *
 * Author: Rohit Mehta
 */

import List from "./List.js";

/**
 * List of all the lists stored in the app as a dictionary
 */
let listOfLists = {
    default: new List("default"),
};

const getList = name => {
    return listOfLists[name];
};

const addList = name => {
    listOfLists[name] = new List(name);
};

const removeList = name => {
    delete listOfLists[name];
};

const getListNames = () => {
    return Object.keys(listOfLists);
};

// save data locally
const saveLocally = () => {
    console.log("Saving locally");
    // console.log(listOfLists);
    localStorage.clear(); // clear previous data
    const keys = Object.keys(listOfLists).sort();
    // console.log(keys);
    const size = keys.length;
    localStorage.setItem("size", size);

    for (let i = 0; i < size; i++) {
        const list = listOfLists[keys[i]];
        // console.log(list);
        const tasksPerList = list.tasks;
        // console.log(JSON.stringify(tasksPerList));
        localStorage.setItem(i, JSON.stringify(tasksPerList));
        localStorage.setItem('list-' + i, list.name);
    }
};

// check if data was saved locally.
// if yes, then load into listOfLists
const loadLocally = () => {
    console.log("Loading locally");
    const size = localStorage.getItem("size");
    if (size > 0) {
        for (let i = 0; i < size; i++) {
            const tasksPerList = JSON.parse(localStorage.getItem(i));
            const name = localStorage.getItem('list-' + i);
            listOfLists[name] = new List(name);
            listOfLists[name].tasks = tasksPerList;
        }
    }
};

export { getList, addList, removeList, getListNames, saveLocally, loadLocally };
