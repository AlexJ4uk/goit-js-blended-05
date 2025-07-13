import refs from './refs.js';
import { createTask } from './markup-tasks.js';
import { nanoid } from 'nanoid';
import { getTasks, saveTaskToStorage, deleteTaskFromStorage } from './local-storage-api.js';

export function renderTasks() {
  const tasks = getTasks();
  const markup = tasks.map(createTask).join('');
  refs.taskList.innerHTML = markup;
}

export function addTask(event) {
    event.preventDefault();
    const titleTask = event.target.taskName.value.trim();
    const descriptionTask = event.target.taskDescription.value.trim();
    if (!titleTask || !descriptionTask) {
        alert("Please fill in all fields");
        return;
    }
    const newTask = {
        id: nanoid(),
        titleTask,
        descriptionTask,
    };
    saveTaskToStorage(newTask);
    refs.taskList.insertAdjacentHTML('beforeend', createTask(newTask));
    refs.form.reset();
}

export function deleteTask(event) {
    if (!event.target.classList.contains('task-list-item-btn')) return;

        const taskItem = event.target.closest('.task-list-item');
    const id = taskItem.dataset.id;
    
    deleteTaskFromStorage(id);
    taskItem.remove();
}