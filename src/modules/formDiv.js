import localStorageHandler from './localStorage';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

function createOption(projectTitle) {
  const projectList = document.querySelector('#project');
  const option = document.createElement('option');
  option.setAttribute('value', projectTitle);
  option.textContent = projectTitle;
  projectList.appendChild(option);
}

function showTaskForm() {
  // set all form fields to empty
  document.querySelector('#note-title').value = '';
  document.querySelector('#description').value = '';
  document.querySelector('#due_date').value = '';
  document.querySelector('#project').value = 'inbox';
  document.querySelector('#priority').value = 'low';

  const form = document.querySelector('#overlayForm');
  form.setAttribute('style', 'display:flex');

  // show the list of project in project selection field
  const projectList = document.querySelector('#project');
  projectList.textContent = '';
  const myKeys = localStorageHandler.getKeys();
  for (let i = 0; i < myKeys.length; i++) {
    createOption(myKeys[i]);
  }
}

export default showTaskForm;
