import { AgregarTarea } from './components/addTask.js';
import { DisplayTask } from './components/readTask.js';
const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', AgregarTarea);

DisplayTask();