import { sidebarNavigator,displayTasks } from "./taskViewer";
import localStorageHandler from "./localStorage";
import taskController from "./taskController";


//this file create the html code for new Task or new Project

function createTask(task){
    const tasks = document.querySelector('#tasks');

    const container = document.createElement('div');
    container.classList.add('task');
    container.classList.add('bottom-padding');
    container.setAttribute('id',task.id);
    container.setAttribute('data-project',task.project_id);

    const taskInfo1 = document.createElement('div');
    taskInfo1.classList.add('task-info');

    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    if(task.isDone){
        input.checked = true;
        container.classList.add('task-done');
    }
    input.addEventListener('click',(e)=>{
        taskController.statusButton(e)
    })
    taskInfo1.appendChild(input);


    const p = document.createElement('p');
    p.textContent = task.title;
    p.classList.add('task-title');
    p.addEventListener('click',(e)=>{
        taskController.showInfo(e);
    })
    taskInfo1.appendChild(p);

    const taskInfo2 = document.createElement('div');
    taskInfo2.classList.add('task-info');

    const editImage = createimageField("SVGs/edit.svg","Edit","Edit");
    editImage.addEventListener('click',(e)=>{
        taskController.showEidtForm(e);
    })
    taskInfo2.appendChild(editImage);

    const deleteImage = createimageField("SVGs/trash.svg","Delete" ,"Delete");
    deleteImage.addEventListener('click',(e)=>{
        taskController.deleteButton(e);
    })
    taskInfo2.appendChild(deleteImage);
    
    container.appendChild(taskInfo1);
    container.appendChild(taskInfo2);


    tasks.appendChild(container);

}

function createimageField(src,title){
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('title',title);
    img.setAttribute('alt',title);
    return img;
}

function createProject(projectTitle){
    const projectList = document.querySelector('#projectList');

    const container = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = projectTitle;
    container.appendChild(p);
    container.setAttribute('id',projectTitle);
    container.classList.add('tast-viewer');
    container.addEventListener('click',()=>{
        sidebarNavigator(container);
        displayTasks(localStorageHandler.getData(container.querySelector('p').textContent));
    })
    projectList.insertBefore(container,projectList.firstChild);
}

function createOption(projectTitle){
    const projectList = document.querySelector('#project');
    const option  = document.createElement('option');
    option.setAttribute('value',projectTitle);
    option.textContent = projectTitle;
    projectList.appendChild(option);
}

function createTaskInfo(task){
    const tasks = document.querySelector('#tasks');

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const leftDiv = document.createElement('div');
    const taskDescription  = createPElement('Description:',task.description);
    const taskProject = createPElement('Project:',task.project_id);
    leftDiv.appendChild(taskDescription);
    leftDiv.appendChild(taskProject);

    const rightDiv = document.createElement('div');
    const taskDate = createPElement('Due Date:',task.dueDate);
    const taskPriority = createPElement('priority:',task.priority);
    rightDiv.appendChild(taskDate);
    rightDiv.appendChild(taskPriority);

    taskDetails.appendChild(leftDiv);
    taskDetails.appendChild(rightDiv);

    taskDetails.classList.add('hide-element');

    tasks.appendChild(taskDetails);
}

function createPElement(title,info){
    const p = document.createElement('p');
    const span = document.createElement('span');
    p.textContent = title;
    span.textContent = info;
    p.appendChild(span);
    return p;
}



export {createTask,createProject,createOption,createTaskInfo};

