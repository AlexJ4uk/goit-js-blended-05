const localKey = 'my-tasks';

export function getTasks() {
    const data = JSON.parse(localStorage.getItem(localKey));
    return data ?? [];
}

export function saveTasks(tasks) {
    localStorage.setItem(localKey, JSON.stringify(tasks));
}

export function saveTaskToStorage(task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
}

export function deleteTaskFromStorage(id) {
    const tasks = getTasks();
    const filtered = tasks.filter(task => task.id !== id);
    saveTasks(filtered);
}

export function initStorage() {
    if (!localStorage.getItem(localKey)) {
        localStorage.setItem(localKey, JSON.stringify([]));
    }
}