class Task{
    constructor(title,description,dueDate,priority,project_id){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Date.now();
        this.isDone = false;
        this.project_id = project_id;
    }
}

export default Task;
