/**
 * todo
 * 
 *      A todo webapp
 * 
 * projectManager.js
 *      the controller for all project lists(and their tasks)
 * 
 * Author: Rohit Mehta
 */

import Project from './project.js';

const projectManager = (() => {
    const defaultProject = new Project("default");
    const customProjects = []; // each Project must be unique

    /**
     * Index of currently active Project in the customProjects
     * -1 indicates defaultProject is selected (default)
     */
    let selected = -1;

    /**
     * lookup a project in the customProjects
     * @param {String} name
     * @returns index of the element if found; otherwise -1
     */
    const lookup = (name) => {
        return customProjects.findIndex(el => el.name === name);
    }

    /**
     * Adds new project to the customProjects
     * @param {String} name of the Project
     * @returns True if successful; otherwise false
     */
    const createNewProject = (name) => {
        const i = lookup(name);
        if (i === -1)
            customProjects.push(new Project(name));
    }

    /**
     * Deletes project named name from the customProjects
     * @param {String} name 
     */
    const deleteProject = (name) => {
        const i = lookup(name);
        if (i !== undefined)
            customProjects.splice(i, 1);
    }

    /**
     * Gets the currently active Project
     * @returns Project
     */
    const getActiveProject = () => {
        if (selected === -1)
            return defaultProject;
        else
            return customProjects[selected];
    }

    /**
     * change the currently active Project
     * @param {Integer} i 
     * @returns Boolean - true on success; otherwise false
     */
    const changeSelection = (i) => {
        if (Number.isInteger(i) && i >= -1) {
            selected = i;
            return true;
        } else
            return false;
    }

    /**
     * Returns the names of all of the projects
     * @returns Array of String
     */
    const showAllProjects = () => {
        let allProjects = customProjects.map(el => el.name);
        allProjects.splice(0, 0, 'default');
        return allProjects;
    }

    return {
        createNewProject,
        deleteProject,
        getActiveProject,
        showAllProjects,
        changeSelection,
    }

})();


export default projectManager;