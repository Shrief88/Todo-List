import { showTaskForm } from './displayController';
import localStorageHandler from './localStorage';

const taskController = (() => {
  const statusButton = (e) => {
    const task = e.target.parentElement.parentElement;
    task.classList.toggle('task-done');
    localStorageHandler.updateTaskStatus(task.getAttribute('data-project'), task.id);
  };

  const deleteButton = (e) => {
    const task = e.target.parentElement.parentElement;
    localStorageHandler.deleteTask(task.getAttribute('data-project'), task.id);
    task.nextSibling.remove();
    task.remove();
  };

  const showInfo = (e) => {
    const taskDiv = e.target.parentElement.parentElement;
    const taskInfo = taskDiv.nextSibling;
    taskInfo.classList.toggle('hide-element');
  };

  const showEidtForm = (e) => {
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
  };

  return {
    statusButton, deleteButton, showInfo, showEidtForm,
  };
})();

export default taskController;
