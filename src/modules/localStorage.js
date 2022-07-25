const localStorageHandler = (()=>{
    const setData = (project)=>{
        localStorage.setItem(project.title,JSON.stringify(project.tasks));
    }

    const getData = (key)=>{
        return JSON.parse(localStorage.getItem(key));
    }

    const getAllProject = ()=>{
        let myProjects = [];
        for (let i=0 ; i<localStorage.length;i++){
            myProjects.push(localStorage.key(i));
        }
        return myProjects;
    }

    return {setData , getData , getAllProject};
})()

export default localStorageHandler;