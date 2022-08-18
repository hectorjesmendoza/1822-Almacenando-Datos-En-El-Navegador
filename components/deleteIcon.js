import { DisplayTask } from "./readTask.js";
const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const lista = document.querySelector('[data-list]');
  const tareas = JSON.parse(localStorage.getItem('task'));
  const Indice = tareas.findIndex((item)=> item.id === id);
  console.log(Indice);
  tareas.splice(Indice, 1);
  console.log(tareas);
  localStorage.setItem('task', JSON.stringify(tareas));
  lista.innerHTML= '';
  DisplayTask();
};

export default deleteIcon;
