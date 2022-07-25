function createTask(task){
    const tasks = document.querySelector('#tasks');

    const container = document.createElement('div');
    container.classList.add('task');
    container.classList.add('bottom-padding');
    container.setAttribute('id',task.id);

    const taskInfo1 = document.createElement('div');
    taskInfo1.classList.add('task-info');

    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    taskInfo1.appendChild(input);

    const p = document.createElement('p');
    p.textContent = task.title;
    taskInfo1.appendChild(p);

    const taskInfo2 = document.createElement('div');
    taskInfo2.classList.add('task-info');

    taskInfo2.appendChild(createimageField("SVGs/edit.svg","Edit","Edit"));
    taskInfo2.appendChild(createimageField("SVGs/flag.svg" ,"Change priority" ,"Change priority"))
    taskInfo2.appendChild(createimageField("SVGs/arrow-right-circle.svg","Move to project", "Move to project"));
    taskInfo2.appendChild(createimageField("SVGs/trash.svg","Delete" ,"Delete"));
    
    container.appendChild(taskInfo1);
    container.appendChild(taskInfo2);


    tasks.appendChild(container);

}

function createimageField(src,title){
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('title',title);
    img.setAttribute('alt',title);
    img.setAttribute('class',title);
    return img;
}

export default createTask;



// <!-- <div class="task bottom-padding">
//                 <div class="task-info">
//                     <input type="checkbox">
//                     <p>Study the grid system</p>
//                 </div>
//                 <div class="task-info">
//                     <img src="SVGs/edit.svg" title="Edit" alt="Edit">
//                     <img src="SVGs/flag.svg" title="Change priority" alt="Change priority">
//                     <img src="SVGs/arrow-right-circle.svg" title="Move to project" alt="Move to project">
//                     <img src="SVGs/trash.svg" title="Delete" alt="Delete">
//                 </div>
// </div> --></img>