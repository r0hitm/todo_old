/**
 * todo
 * 
 *      A todo webapp
 * 
 * project.js
 *      different projects having their own separate tasks
 * 
 * Author: Rohit Mehta
 */

import Task from './task.js';

class Project {
    #name;
    #listOfTasks;

    constructor(name) {
        this.#name = name;
        this.#listOfTasks = [];
    }

    get name() {
        return this.#name;
    }

    get tasks() {
        return this.#listOfTasks;
    }

    /**
     * Adds a new task to the project
     * @param {Task} data an instance of Task class
     */
    addTask(data) {
        if (data instanceof Task)
            this.#listOfTasks.push(data);
    }

    deleteTask(data) {
        const dataIndex = this.#listOfTasks.indexOf(data);

        if (dataIndex !== -1)
            this.#listOfTasks.splice(dataIndex, 1);
    }

    /**
     * look up task name in the #listOfTasks
     * @returns task if succesful; otherwise undefined
     */
    lookup(name) {
        return this.#listOfTasks.find(el => el.title === name);
    }
}


export default Project;