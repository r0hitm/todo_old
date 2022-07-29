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
        this.dueDate = (() => {
            const temp = data.dueDate.split("-");
            return {
                year: Number.parseInt(temp[0]),
                month: Number.parseInt(temp[1]),
                day: Number.parseInt(temp[2]),
            };
        })();
        this.priority = data.priority;
    }

    edit(data) {
        this.title = data.title;
        this.desc = data.desc;
        this.dueDate = (() => {
            const temp = data.dueDate.split("-");
            return {
                year: Number.parseInt(temp[0]),
                month: Number.parseInt(temp[1]),
                day: Number.parseInt(temp[2]),
            };
        })();
        this.priority = data.priority;
    }
}

// const testing = new Task(data);

// console.log(testing);

export default Task;
