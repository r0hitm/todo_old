/**
 * todo
 * 
 *      A todo webapp
 * 
 * task.js
 *      The task item of the todo list
 * 
 * Author: Rohit Mehta
 */

//------ test data ------------
const data = {
    title: 'do something',
    dueDate: '2022-6-22',
}
// -----------------------------

class Task {
    constructor(data) {
        this.title = data.title;
        this.dueDate = {
            year: Number.parseInt(data.dueDate.substr(0, 4)),
            month: Number.parseInt(data.dueDate.substr(5, 1)),
            day: Number.parseInt(data.dueDate.substr(7, 2)),
        }
    }

    edit(data) {
        this.title = data.title;
        this.dueDate = {
            year: Number.parseInt(data.dueDate.substr(0, 4)),
            month: Number.parseInt(data.dueDate.substr(5, 1)),
            day: Number.parseInt(data.dueDate.substr(7, 2)),
        }
    }
}

const testing = new Task(data);

console.log(testing);