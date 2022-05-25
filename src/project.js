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

class Project {
    #name;
    #listOfTasks;

    constructor(name) {
        this.#name = name;
        this.#listOfTasks = [];
    }

    get projectName() {
        return this.#name;
    }

    get listOfTasks() {
        return this.#listOfTasks;
    }

    // data must be an instance of Task
    addTask(data) {
        this.#listOfTasks.push(data);
    }

    deleteTask(data) {
        let dataIndex = this.#listOfTasks.indexOf(data);
        
        if (dataIndex !== -1)
            this.#listOfTasks.splice(dataIndex, 1);
    }
}


export default Project;