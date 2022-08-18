const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event)=> completeTask(event,id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tareas = JSON.parse(localStorage.getItem("task"));
  const indice = tareas.findIndex(item => item.id === id);
  tareas[indice]["terminado"] = !tareas[indice]["terminado"];
  localStorage.setItem("task", JSON.stringify(tareas));
};

export default checkComplete;
