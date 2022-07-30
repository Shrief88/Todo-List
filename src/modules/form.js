import Task from './task';
import Project from './project';
import localStorageHandler from './localStorage';
import { createProject, displayTasks } from './projectDiv';

// this file handle submutting data to our two forms

const formHandler = () => {
  const taskForm = document.querySelector('#form');
  taskForm.addEventListener('submit', (e) => {
    // check if the user open the form from edit task button
    if (taskForm.classList.contains('edit')) {
      localStorageHandler.deleteTask(taskForm.getAttribute('data-project'), taskForm.getAttribute('data-id'));
      taskForm.classList.remove('edit');
      taskForm.removeAttribute('data-project');
      taskForm.removeAttribute('data-id');
    }

    e.preventDefault(); // prevent the from reloading

    const title = document.querySelector('#note-title').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('#priority').value;
    const dueDate = document.querySelector('#due_date').value;
    const project = document.querySelector('#project').value;

    const myProject = new Project(project);
    myProject.tasks = localStorageHandler.getData(project);
    const newTask = new Task(title, description, dueDate, priority, project);
    myProject.add_task(newTask);
    localStorageHandler.setData(myProject);

    const form = document.querySelector('#overlayForm');
    form.setAttribute('style', 'display:none');

    const selectedProject = document.querySelector('.selected').id;
    let selectedProjectTasks = [];
    if (selectedProject !== 'today') {
      selectedProjectTasks = localStorageHandler.getData(selectedProject);
    } else {
      selectedProjectTasks = localStorageHandler.getTodayTasks();
    }
    displayTasks(selectedProjectTasks);
  });

  const projectForm = document.querySelector('#project-form');
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#project-title').value;

    const newProject = new Project(title);
    localStorageHandler.setData(newProject);

    document.querySelector('#project-title').value = '';
    createProject(title);
  });
};

export default formHandler;
