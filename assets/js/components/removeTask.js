const BtnRemove = () => {
    const btnRemove = document.createElement('button');

    btnRemove.innerText = 'REMOVE';
    btnRemove.addEventListener('click', removeTask);

    return btnRemove;
};

const removeTask = (event) => {
    const btnRemove = event.target;
    const taskDone = btnRemove.parentElement;

    taskDone.remove();

    return btnRemove;
};

export default BtnRemove;