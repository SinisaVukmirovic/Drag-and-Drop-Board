const form = document.querySelector('#todo-form');
const input = form.querySelector('input');
const todoLane = document.querySelector('#todo-lane');

form.addEventListener('submit', e => {
    e.preventDefault();

    const value = input.value;
    if (!value) return;

    const newTask = document.createElement('p');

    newTask.classList.add('task');
    newTask.setAttribute('draggable', 'true');
    newTask.innerText = value;

    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('is-dragging');
    });
    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('is-dragging');
    });

    todoLane.appendChild(newTask);

    input.value = '';
});