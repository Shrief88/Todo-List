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
  const projects = document.querySelectorAll('.task-viewer');
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

  const img = document.createElement('img');
  img.setAttribute('src', 'SVGs/trash.svg');
  img.setAttribute('alt', 'delete');
  container.appendChild(img);

  img.addEventListener('click', (e) => {
    const key = e.target.parentElement.id;
    localStorageHandler.deleteProject(key);

    const selectedProject = document.querySelector('.selected').id;
    if (selectedProject === key) {
      displayTasks(localStorageHandler.getData('inbox'));
      sidebarNavigator(document.querySelector('#inbox'));
    } else if (selectedProject === 'today') {
      displayTasks(localStorageHandler.getTodayTasks());
    } else {
      displayTasks(localStorageHandler.getData(selectedProject));
    }

    const project = e.target.parentElement;
    project.remove();
  });

  container.setAttribute('id', projectTitle);
  container.classList.add('task-viewer');
  container.classList.add('removable-project');
  container.addEventListener('click', (e) => {
    if (e.target.alt !== 'delete') {
      sidebarNavigator(container);
      displayTasks(localStorageHandler.getData(container.querySelector('p').textContent));
    }
  });
  projectList.insertBefore(container, projectList.firstChild);
}

export { createProject, displayTasks, sidebarNavigator };
