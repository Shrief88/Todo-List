class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    add_task(task){
        this.tasks.push(task);
    }
}

export default Project;