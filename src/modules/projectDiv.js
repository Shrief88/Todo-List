import localStorageHandler from './localStorage';
import { createTask, createTaskInfo } from './taskDiv';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

function displayTasks(tasksList) {
  const tasks = document.querySelector('#tasks');
  tasks.textContent = '';
  for (let i = 0; i < tasksList.length; i++) {
    createTask(tasksList[i]);
    createTaskInfo(tasksList[i]);
  }
}

function sidebarNavigator(projectDiv) {
  const projects = document.querySelectorAll('.tast-viewer');
  projects.forEach((project) => {
    project.classList.remove('selected');
  });
  projectDiv.classList.toggle('selected');
}

function createProject(projectTitle) {
  const projectList = document.querySelector('#projectList');

  const container = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = projectTitle;
  container.appendChild(p);
  container.setAttribute('id', projectTitle);
  container.classList.add('tast-viewer');
  container.addEventListener('click', () => {
    sidebarNavigator(container);
    displayTasks(localStorageHandler.getData(container.querySelector('p').textContent));
  });
  projectList.insertBefore(container, projectList.firstChild);
}

export { createProject, displayTasks, sidebarNavigator };
