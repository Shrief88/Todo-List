import { format } from 'date-fns';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const localStorageHandler = (() => {
  const setData = (project) => {
    localStorage.setItem(project.title, JSON.stringify(project.tasks));
  };

  const getData = (key) => JSON.parse(localStorage.getItem(key));

  // get number of projects
  const getKeysLength = () => Object.keys(localStorage).length;

  const getProjectByIndex = (index) => localStorage.key(index);

  const getTodayTasks = () => {
    const todayObject = new Date();
    const today = format(new Date(todayObject.getFullYear(), todayObject.getMonth(), todayObject.getDate()), 'yyyy-MM-dd');

    const myTodayTasks = [];
    const myKeysLength = getKeysLength();
    for (let i = 0; i < myKeysLength; i++) {
      const tasks = getData(getProjectByIndex(i));
      for (const task of tasks) {
        if (today === task.dueDate) {
          myTodayTasks.push(task);
        }
      }
    }
    return myTodayTasks;
  };

  const updateTaskStatus = (projectId, taskId) => {
    const myTasks = localStorageHandler.getData(projectId);
    myTasks.map((element) => {
      if (element.id == taskId) {
        element.isDone = !element.isDone;
      }
    });
    localStorage.setItem(projectId, JSON.stringify(myTasks));
  };

  const deleteTask = (projectId, taskId) => {
    const myTasks = localStorageHandler.getData(projectId);
    const result = myTasks.filter((element) => (element.id != taskId));
    localStorage.setItem(projectId, JSON.stringify(result));
  };

  const getTaskById = (projectId, taskId) => {
    const myTasks = localStorageHandler.getData(projectId);
    const result = myTasks.filter((element) => (element.id == taskId));
    return result[0];
  };

  return {
    setData,
    getData,
    getKeysLength,
    getProjectByIndex,
    getTodayTasks,
    updateTaskStatus,
    deleteTask,
    getTaskById,
  };
})();

export default localStorageHandler;
