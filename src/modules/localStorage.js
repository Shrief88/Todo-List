import { format } from 'date-fns'



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
        console.log(today);

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


    return {setData , getData , getKeysLength , getProjectByIndex , getTodayTasks};
})()

export default localStorageHandler;
