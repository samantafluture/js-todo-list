import BtnDone from './finishTask.js';
import { loadTask } from './loadTask.js';
import BtnRemove from './removeTask.js';

export const handleNewItem = (event) => {
    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // if it's empty, initialize an array
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value);
    const hour = date.format('HH:mm');

    const formattedDate = date.format('DD/MM/YYYY');    
    const done = false;
    
    const data = {
        value, 
        formattedDate,
        hour,
        done
    };

    const updatedTasks = [... tasks, data];
    
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    input.value = " ";

    loadTask();
};

export const Task = ({ value, hour, done }, id) => {
    const task = document.createElement('li');
    const content = `<p class="content">${hour} * ${value}</p>`;

    if(done) {
        task.classList.add('done');
    };
    task.classList.add('task');

    task.innerHTML = content;
    task.appendChild(BtnDone(loadTask, id));
    task.appendChild(BtnRemove(loadTask, id));

    return task;
};