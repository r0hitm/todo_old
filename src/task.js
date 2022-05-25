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
// const data = {
//     title: 'do something',
//     desc: 'important work for xyz',
//     dueDate: '2022-6-22',
//     priority: 'low'
// }
// -----------------------------

class Task {
    constructor(data) {
        this.title = data.title;
        this.desc = data.desc;
        this.dueDate = {
            year: Number.parseInt(data.dueDate.substr(0, 4)),
            month: Number.parseInt(data.dueDate.substr(5, 1)),
            day: Number.parseInt(data.dueDate.substr(7, 2)),
        }
        this.priority = data.priority;
    }

    edit(data) {
        this.title = data.title;
        this.desc = data.desc;
        this.dueDate = {
            year: Number.parseInt(data.dueDate.substr(0, 4)),
            month: Number.parseInt(data.dueDate.substr(5, 1)),
            day: Number.parseInt(data.dueDate.substr(7, 2)),
        }
        this.priority = data.priority;
    }
}

// const testing = new Task(data);

// console.log(testing);


export default Task;