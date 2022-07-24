const localStorageHandler = (()=>{
    const setData = (project,mytasks)=>{
        localStorage.setItem(project,JSON.stringify(mytasks));
    }

    const getData = (project)=>{
        return JSON.parse(localStorage.getItem(project));
    }

    return {setData , getData};
})()

export default localStorageHandler;