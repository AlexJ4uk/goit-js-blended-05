export function createTask({ id, titleTask, descriptionTask }) {
  return `
    <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${titleTask}</h3>
      <p>${descriptionTask}</p>
    </li>
  `;
}