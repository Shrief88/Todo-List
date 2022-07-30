import showTaskForm from './formDiv';
import localStorageHandler from './localStorage';

function statusButton(e) {
  const task = e.target.parentElement.parentElement;
  task.classList.toggle('task-done');
  localStorageHandler.updateTaskStatus(task.getAttribute('data-project'), task.id);
}

function deleteButton(e) {
  const task = e.target.parentElement.parentElement;
  localStorageHandler.deleteTask(task.getAttribute('data-project'), task.id);
  task.nextSibling.remove();
  task.remove();
}

function showInfo(e) {
  const taskDiv = e.target.parentElement.parentElement;
  const taskInfo = taskDiv.nextSibling;
  taskInfo.classList.toggle('hide-element');
}

function showEidtForm(e) {
  const taskDiv = e.target.parentElement.parentElement;
  const task = localStorageHandler.getTaskById(taskDiv.getAttribute('data-project'), taskDiv.id);
  showTaskForm();
  document.querySelector('#note-title').value = task.title;
  document.querySelector('#description').value = task.description;
  document.querySelector('#due_date').value = task.dueDate;
  document.querySelector('#project').value = task.project_id;
  document.querySelector('#priority').value = task.priority;

  const taskForm = document.querySelector('#form');
  taskForm.classList.add('edit');
  taskForm.setAttribute('data-id', task.id);
  taskForm.setAttribute('data-project', task.project_id);
}

function createimageField(src, title) {
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('title', title);
  img.setAttribute('alt', title);
  return img;
}

function createTask(task) {
  const tasks = document.querySelector('#tasks');

  const container = document.createElement('div');
  container.classList.add('task');
  container.classList.add('bottom-padding');
  container.setAttribute('id', task.id);
  container.setAttribute('data-project', task.project_id);

  const taskInfo1 = document.createElement('div');
  taskInfo1.classList.add('task-info');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  if (task.isDone) {
    input.checked = true;
    container.classList.add('task-done');
  }
  input.addEventListener('click', (e) => {
    statusButton(e);
  });
  taskInfo1.appendChild(input);

  const p = document.createElement('p');
  p.textContent = task.title;
  p.classList.add('task-title');
  p.addEventListener('click', (e) => {
    showInfo(e);
  });
  taskInfo1.appendChild(p);

  const taskInfo2 = document.createElement('div');
  taskInfo2.classList.add('task-info');

  const editImage = createimageField('SVGs/edit.svg', 'Edit', 'Edit');
  editImage.addEventListener('click', (e) => {
    showEidtForm(e);
  });
  taskInfo2.appendChild(editImage);

  const deleteImage = createimageField('SVGs/trash.svg', 'Delete', 'Delete');
  deleteImage.addEventListener('click', (e) => {
    deleteButton(e);
  });
  taskInfo2.appendChild(deleteImage);

  container.appendChild(taskInfo1);
  container.appendChild(taskInfo2);

  tasks.appendChild(container);
}

function createPElement(title, info) {
  const p = document.createElement('p');
  const span = document.createElement('span');
  p.textContent = title;
  span.textContent = info;
  p.appendChild(span);
  return p;
}

function createTaskInfo(task) {
  const tasks = document.querySelector('#tasks');

  const taskDetails = document.createElement('div');
  taskDetails.classList.add('task-details');

  const leftDiv = document.createElement('div');
  const taskDescription = createPElement('Description:', task.description);
  const taskProject = createPElement('Project:', task.project_id);
  leftDiv.appendChild(taskDescription);
  leftDiv.appendChild(taskProject);

  const rightDiv = document.createElement('div');
  const taskDate = createPElement('Due Date:', task.dueDate);
  const taskPriority = createPElement('priority:', task.priority);
  rightDiv.appendChild(taskDate);
  rightDiv.appendChild(taskPriority);

  taskDetails.appendChild(leftDiv);
  taskDetails.appendChild(rightDiv);

  taskDetails.classList.add('hide-element');

  tasks.appendChild(taskDetails);
}

export { createTask, createTaskInfo };
