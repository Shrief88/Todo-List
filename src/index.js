import './style.css';
import Project from './modules/project';
import formHandler from './modules/form';
import localStorageHandler from './modules/localStorage';
import { createProject, displayTasks, sidebarNavigator } from './modules/projectDiv';
import displayController from './modules/displayController';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

function init() {
  // this code will only run at the first time a user open the website
  if (!localStorageHandler.getData('inbox')) {
    const defaultProject = new Project('inbox');
    localStorageHandler.setData(defaultProject);
    const inbox = document.querySelector('.selected');
    inbox.setAttribute('id', defaultProject.title);
  }

  // update the date in today icon
  const today = document.querySelector('#todayDate');
  const day = new Date();
  today.textContent = day.getDate();

  // display all tasks in inbox project
  displayTasks(localStorageHandler.getData('inbox'));
  const inbox = document.querySelector('.selected');
  inbox.addEventListener('click', () => {
    sidebarNavigator(inbox);
    displayTasks(localStorageHandler.getData('inbox'));
  });

  // display all project in local storage
  const myKeys = localStorageHandler.getKeys();
  for (let i = 0; i < myKeys.length; i++) {
    if (myKeys[i] === 'inbox') {
      continue;
    }
    createProject(myKeys[i]);
  }

  // display todayTasks
  const todayDiv = document.querySelector('#today');
  todayDiv.addEventListener('click', () => {
    sidebarNavigator(todayDiv);
    displayTasks(localStorageHandler.getTodayTasks());
  });

  displayController();
  formHandler();
}

init();
