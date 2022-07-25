const localStorageHandler = (()=>{
    const setData = (project)=>{
        localStorage.setItem(project.title,JSON.stringify(project.tasks));
    }

    const getData = (key)=>{
        return JSON.parse(localStorage.getItem(key));
    }

    const getAllkeys = ()=>{
        return Object.keys(localStorage);
    }

    const getProjectByIndex = (index)=>{
        return localStorage.key(index);
    }

    return {setData , getData , getAllkeys , getProjectByIndex};
})()

export default localStorageHandler;