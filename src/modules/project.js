class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    add_task(task){
        this.tasks.push(task);
    }
}

export default Project;