const finishTask = (update, id) => {
    const addedTasks = JSON.parse(localStorage.getItem('tasks'));

    // id identifies an exact task
    // we alter the state it comes
    addedTasks[id].done = !addedTasks[id].done;
    localStorage.setItem('tasks', JSON.stringify(addedTasks));

    update();
};

const BtnDone = (update, id) => {
    const btnDone = document.createElement('button');

    btnDone.classList.add('check-button');
    btnDone.innerText = 'DONE';
    btnDone.addEventListener('click', ()=> finishTask(update, id));

    return btnDone;
};

export default BtnDone;