import { format } from 'date-fns';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const localStorageHandler = (() => {
  const setData = (project) => {
    localStorage.setItem(project.title, JSON.stringify(project.tasks));
  };

  const getData = (key) => JSON.parse(localStorage.getItem(key));

  const getProjectByIndex = (index) => localStorage.key(index);

  const getKeys = () => {
    const keys = [];
    const myKeysLength = Object.keys(localStorage).length;
    for (let i = 0; i < myKeysLength; i++) {
      keys.push(getProjectByIndex(i));
    }
    return keys;
  };

  const getTodayTasks = () => {
    const todayObject = new Date();
    const today = format(new Date(todayObject.getFullYear(), todayObject.getMonth(), todayObject.getDate()), 'yyyy-MM-dd');

    const myTodayTasks = [];
    const myKeysLength = Object.keys(localStorage).length;
    for (let i = 0; i < myKeysLength; i++) {
      const tasks = getData(getProjectByIndex(i));
      for (let j = 0; j < tasks.length; j++) {
        if (today === tasks[j].dueDate) {
          myTodayTasks.push(tasks[j]);
        }
      }
    }
    return myTodayTasks;
  };

  const updateTaskStatus = (projectId, taskId) => {
    const myTasks = localStorageHandler.getData(projectId);
    myTasks.map((element) => {
      if (element.id === Number(taskId)) {
        element.isDone = !element.isDone;
      }
    });
    localStorage.setItem(projectId, JSON.stringify(myTasks));
  };

  const deleteTask = (projectId, taskId) => {
    const myTasks = localStorageHandler.getData(projectId);
    const result = myTasks.filter((element) => (element.id !== Number(taskId)));
    localStorage.setItem(projectId, JSON.stringify(result));
  };

  const getTaskById = (projectId, taskId) => {
    const myTasks = localStorageHandler.getData(projectId);
    const result = myTasks.filter((element) => (element.id === Number(taskId)));
    return result[0];
  };

  return {
    setData,
    getData,
    getKeys,
    getProjectByIndex,
    getTodayTasks,
    updateTaskStatus,
    deleteTask,
    getTaskById,
  };
})();

export default localStorageHandler;
