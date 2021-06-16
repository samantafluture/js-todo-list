const removeTask = (update, id) => {
    const index = id;
    const addedTasks = JSON.parse(localStorage.getItem('tasks'));

    addedTasks.splice(index, 1); // remove the item itself
    localStorage.setItem('tasks', JSON.stringify(addedTasks));

    update();
};

const BtnRemove = (update, id) => {
    const btnRemove = document.createElement('button');

    btnRemove.innerText = 'REMOVE';
    btnRemove.addEventListener('click', ()=> removeTask(update, id));

    return btnRemove;
};

export default BtnRemove;