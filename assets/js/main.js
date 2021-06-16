import BtnDone from './components/finishTask.js';
import BtnRemove from './components/removeTask.js';
    
const createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector('[data-list');
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${value}</p>`;
    task.innerHTML = content;
    
    task.appendChild(BtnDone());
    task.appendChild(BtnRemove());
    list.appendChild(task);

    input.value = " ";
};

const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask);

