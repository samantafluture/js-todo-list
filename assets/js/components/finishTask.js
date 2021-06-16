const BtnDone = () => {
    const btnDone = document.createElement('button');

    btnDone.classList.add('check-button');
    btnDone.innerText = 'DONE';
    btnDone.addEventListener('click', finishTask);

    return btnDone;
};

const finishTask = (event) => {
    const btnDone = event.target;
    const taskDone = btnDone.parentElement;

    taskDone.classList.toggle('done');
};

export default BtnDone;