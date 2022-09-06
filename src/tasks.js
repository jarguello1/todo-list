function createTaskBox() {
    const tasks = document.createElement('div');
    tasks.setAttribute('id', 'tasks');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "Tasks";
    tasks.appendChild(title);

    return tasks;
}

function loadTasks() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createTaskBox());
}

export default loadTasks;