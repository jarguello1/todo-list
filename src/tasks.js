function createTaskBox() {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', 'taskContainer');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "taskContainer";
    taskContainer.appendChild(title);

    return taskContainer;
}

function loadTaskContainer() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createTaskBox());
}

export default loadTaskContainer;