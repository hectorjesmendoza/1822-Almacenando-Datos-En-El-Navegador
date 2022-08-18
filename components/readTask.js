import { createTask } from './addTask.js';
import { uniqueDates, OrderDates } from '../services/date.js';
import ElementoFecha from './dateElement.js';

export const DisplayTask = () => {
    const lista = document.querySelector('[data-list]');
    const ListaTareas = JSON.parse(localStorage.getItem('task')) || [];
    const fechas = uniqueDates(ListaTareas);
    OrderDates(fechas);
    fechas.forEach( date =>{
        const dateMoment = moment(date,"DD/MM/YYYY");
        lista.appendChild(ElementoFecha(date));
        ListaTareas.forEach((task) =>{
            const taskDate = moment(task.FechaStd, "DD/MM/YYYY");
            const Diferencia = dateMoment.diff(taskDate);
            if (Diferencia == 0){
                lista.appendChild(createTask(task));
            }
            
        });
    });

    
};