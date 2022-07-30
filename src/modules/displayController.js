import showTaskForm from './formDiv';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
// this file handle all user actions on the page that not related to entering new data

const displayController = () => {
  const toggleButton = document.querySelector('#toggle-button');
  toggleButton.addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('hide-element');
  });

  const addTaskButton = document.querySelector('#addTaskButton');
  addTaskButton.addEventListener('click', showTaskForm);

  const closeFormButton = document.querySelector('#closeForm');
  closeFormButton.addEventListener('click', () => {
    const form = document.querySelector('#overlayForm');
    form.setAttribute('style', 'display:none');
    const taskForm = document.querySelector('#form');

    // remove the data that we add when the user click the edit button
    taskForm.classList.remove('edit');
    taskForm.removeAttribute('data-id');
    taskForm.removeAttribute('data-project');
  });

  const projectButton = document.querySelector('#showProjects');
  projectButton.addEventListener('click', () => {
    const projectList = document.querySelector('#projectList');
    projectList.classList.toggle('hide-element');

    // make sure than the project form is not showing
    const projectForm = document.querySelector('#project-form');
    if (!projectForm.classList.contains('hide-element')) {
      projectForm.classList.add('hide-element');
    }
  });

  const projectFormButton = document.querySelector('#addProject');
  projectFormButton.addEventListener('click', () => {
    const projectForm = document.querySelector('#project-form');
    projectForm.classList.toggle('hide-element');
  });

  const projectCancelButton = document.querySelector('#cancel');
  projectCancelButton.addEventListener('click', () => {
    const projectForm = document.querySelector('#project-form');
    projectForm.classList.toggle('hide-element');
  });

  // in smaller screen we hide the sidebar by default
  if (window.innerWidth < 900) {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.add('hide-element');
  }
};

export default displayController;
