import { format } from 'date-fns'
import { mt } from 'date-fns/locale';

const localStorageHandler = (()=>{
    const setData = (project)=>{
        localStorage.setItem(project.title,JSON.stringify(project.tasks));
    }

    const getData = (key)=>{
        return JSON.parse(localStorage.getItem(key));
    }

    const getKeysLength = ()=>{
        return Object.keys(localStorage).length;
    }

    const getProjectByIndex = (index)=>{
        return localStorage.key(index);
    }

    const getTodayTasks = ()=>{
        const todayObject = new Date();
        const today = format(new Date(todayObject.getFullYear(),todayObject.getMonth(),todayObject.getDate()),'yyyy-MM-dd');

        let myTodayTasks = [];
        let myKeysLength = getKeysLength();
        for(let i=0; i<myKeysLength;i++){
            const tasks = getData(getProjectByIndex(i));
            for(const task of tasks){
                if (today === task.dueDate){
                    myTodayTasks.push(task);
                }
            }
        }
        return myTodayTasks;
    }

    const updateTaskStatus = (project_id,task_id)=>{
        const myTasks = localStorageHandler.getData(project_id);
        myTasks.map((element)=>{
        if(element.id == task_id){
            element.isDone = element.isDone ? false : true;
        }});
        localStorage.setItem(project_id,JSON.stringify(myTasks));
    }

    const deleteTask =(project_id,task_id)=>{
        const myTasks = localStorageHandler.getData(project_id);
        const result = myTasks.filter((element)=>  
            (element.id != task_id)
        );
        localStorage.setItem(project_id,JSON.stringify(result));
    }

    const getTaskById = (project_id,task_id)=>{
        const myTasks = localStorageHandler.getData(project_id);
        const result = myTasks.filter((element)=>  
            (element.id == task_id)
        );
        return result[0];
    }

    
    return {setData , getData , getKeysLength , getProjectByIndex , getTodayTasks ,updateTaskStatus,deleteTask, getTaskById};
})()

export default localStorageHandler;
