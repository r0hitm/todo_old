/**
 * TaskList.js
 *      Individual tasks & their controls and List class definition.
 *      A list is a collection of tasks.
 *
 * Author: Rohit Mehta
 */

class Task {
    /**
     * Constructor for a new task
     * @param {string} title Title of the task
     * @param {string} desc Description of the task
     * @param {string} dueDate Due date of the task - TODO: change to Date object
     * @param {str} priority Priority of the task - TODO: change to enum
     */
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }
}

class List {
    #listOfTasks;

    constructor(name) {
        this.name = name;
        this.#listOfTasks = [];
    }

    get tasks() {
        return this.#listOfTasks;
    }

    set tasks(newTasks) {
        this.#listOfTasks = newTasks;
    }

    isEmpty() {
        return this.#listOfTasks.length === 0;
    }

    changeName(newName) {
        this.name = newName;
    }

    addTask(title, desc, dueDate, priority) {
        this.#listOfTasks.push(new Task(title, desc, dueDate, priority));
    }

    removeTask(taskName) {
        this.#listOfTasks = this.#listOfTasks.filter(
            task => task.title !== taskName
        );
        // console.log('After removing ${taskName}', this.#listOfTasks);
    }

    removeCompletedTasks() {
        this.#listOfTasks = this.#listOfTasks.filter(task => !task.isComplete);
    }
}

export default List;
