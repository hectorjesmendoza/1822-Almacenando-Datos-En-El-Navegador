import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { DisplayTask } from './readTask.js';

export const AgregarTarea = (evento) => {
    evento.preventDefault();
    
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendario = document.querySelector('[data-form-date]');

    const value = input.value;
    const Fecha = calendario.value;
    const FechaStd =moment(Fecha).format('DD/MM/YYYY');
    
    if (value == "" || Fecha == ""){
      return;
    }

    input.value = '';
    calendario.value = '';

    const terminado = false;

    const ObjTarea = {
        value, 
        FechaStd,
        terminado,
        id: uuid.v4()
      };
    
    list.innerHTML = '';

    const ListaTareas = JSON.parse(localStorage.getItem('task')) || [];
    ListaTareas.push(ObjTarea);  
    localStorage.setItem("task", JSON.stringify(ListaTareas));
    
    DisplayTask();
  };
    
  export const createTask = ({value, FechaStd, terminado, id}) => {
    const task = document.createElement('li');
          task.classList.add('card');
    //backticks
    const taskContent = document.createElement('div');
     
    const check = checkComplete(id);

    if (terminado) {
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
    const titleTask = document.createElement('span');
          titleTask.classList.add('task');
          titleTask.innerText = value;
          taskContent.appendChild(check);
          taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    /* const ElementoFecha = document.createElement('span');
          ElementoFecha.innerHTML = FechaStd; */
    
          task.appendChild(taskContent);
         // task.appendChild(ElementoFecha);
          task.appendChild(deleteIcon(id));
    return task;
  };