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

    get listOfTasks() {
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
}

// testing ---------------
const data = {
    title: 'do something',
    desc: 'important work for xyz',
    dueDate: '2022-6-22',
    priority: 'low'
}

const task = new Task(data);

const testProject = new Project('Testing');
testProject.addTask(task);
testProject.addTask('rohi');
console.log(testProject);
//-----------------------

export default Project;