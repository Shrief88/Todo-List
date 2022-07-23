import './style.css';
import Task from './modules/task'
import Project from './modules/project'


const displayController = (()=>{
    const toggleButton = document.querySelector('#toggle-button');

    toggleButton.addEventListener('click',()=>{
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.toggle('hide-element')
    })
})()
