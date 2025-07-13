import { nanoid } from 'nanoid';
import refs from './refs';

export function createTask({ id, titleTask, descriptionTask }) {
    const markup = `
    <li class="task-list-item" data-id="${id}">
    <button class="task-list-item-btn">Delete</button>
    <h3>${titleTask}</h3>
    <p>${descriptionTask}</p></li>
`;
    return markup;
}