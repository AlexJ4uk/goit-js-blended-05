import refs from './js/refs.js';
import { addTask, deleteTask, renderTasks } from './js/render-tasks.js';
import { initStorage } from './js/local-storage-api.js';
import { changeTheme } from './js/theme-switcher.js';

initStorage();
renderTasks();

refs.form.addEventListener('submit', addTask);
refs.taskList.addEventListener('click', deleteTask);
refs.btnTheme.addEventListener('click', changeTheme);
