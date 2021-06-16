import { orderDate, removeRepDates } from '../service/date.js';
import { createDate } from './createDate.js';

export const loadTask = () => {
    const list = document.querySelector('[data-list]');
    const addedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = " ";

    const uniqueDates = removeRepDates(addedTasks);
    orderDate(uniqueDates);
    uniqueDates.forEach((day) => {
        list.appendChild(createDate(day));
    });
};

