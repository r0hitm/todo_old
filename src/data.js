/**
 * data.js
 *      Provides the storage for the app
 * 
 * Author: Rohit Mehta
 */

import List from './List.js';

/**
 * List of all the lists stored in the app as a dictionary
 */
const listOfLists = {
    'default': new List('default'),
}

const getList = (name) => {
    return listOfLists[name];
}

const addList = (name) => {
    listOfLists[name] = new List(name);
}

const removeList = (name) => {
    delete listOfLists[name];
}

const getListNames = () => {
    return Object.keys(listOfLists);
}

// TODO: Implement persistent storage of lists locally

export { getList, addList, removeList, getListNames };