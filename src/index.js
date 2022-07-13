/**
 * todo
 * 
 *      A todo webapp
 * 
 * injex.js
 *      This file connects the rest of app to the DOM. And,
 *      is also the entry point.
 * 
 * Author: Rohit Mehta
 */

import pm from './projectManager';
import Project from './project.js';
import Task from './task.js';

import './style.css';


// Getting the DOM handles
const projectListHandle = document.getElementsByClassName('project-list')[0];
const taskListHandle = document.getElementsByClassName('tasks')[0];
const formHandle = document.getElementsByClassName('input-form')[0];

// console.log(projectListHandle);


// testing --------------------------------------

// adding some tasks to default project
let currentProject = pm.getActiveProject();
console.log(currentProject);
currentProject.addTask(
    new Task({
        title: 'do something',
        desc: 'important work for xyz',
        dueDate: '2022-6-22',
        priority: 'low'
    })
);

console.log(currentProject);
console.log(currentProject.tasks);
console.log(pm.getActiveProject().tasks);
console.log(currentProject === pm.getActiveProject());


console.log(pm.showAllProjects());
console.log(pm.createNewProject('School'));
console.log(pm.showAllProjects());
console.log(pm.createNewProject('Misc'));
console.log(pm.showAllProjects());
console.log(pm.deleteProject('Misc'));
console.log(pm.showAllProjects());
// ----------------------------------------------
