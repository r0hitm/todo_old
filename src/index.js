/**
 * todo
 * 
 *      A todo webapp
 * 
 * injex.js
 *      Entry point for the final javascript bundle.
 * 
 * Author: Rohit Mehta
 */

import Project from './project.js';
import Task from './task.js';

// console.log(Project);
// console.log(Task);

const defaultProject = new Project("default");
// console.log(defaultProject);

// -------Dummy data for testing purposes---------
const data1 = {
    title: 'Clean Gs',
    desc: 'clean the cage and around of my guniea pigs',
    dueDate: '2022-6-25',
    priority: 'medium'
}

const data2 = {
    title: 'Do question 1-10 of chapter 1',
    desc: 'Practice problems of SCD class',
    dueDate: '2022-6-26',
    priority: 'low'
}

const data3 = {
    title: 'Complete HtC Problem Bank',
    desc: 'Problesm in the problem bank',
    dueDate: '2022-6-30',
    priority: 'high'
}

const data4 = {
    title: 'Buy a pen',
    desc: '',
    dueDate: '2022-6-26',
    priority: 'low'
}

const task1 = new Task(data1);
const task2 = new Task(data2);
const task3 = new Task(data3);
const task4 = new Task(data4);

//------------------------------------------------

// Let's add some tasks to it!
defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
defaultProject.addTask(task4);

console.log(defaultProject.projectName);
console.log(defaultProject.listOfTasks);

console.log('Now testing deleting some tasks from the default');

defaultProject.deleteTask(task2);
defaultProject.deleteTask(task1);

(console.log(defaultProject.listOfTasks));