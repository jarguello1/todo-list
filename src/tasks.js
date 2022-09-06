function createTaskBox() {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', 'taskContainer');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "Tasks";
    taskContainer.appendChild(title);

    const addBtns = document.createElement('button');
    addBtns.setAttribute('id', 'addTasks');
    addBtns.textContent = "+ New Tasks"
    addBtns.addEventListener('click', (e) => {
        const button = document.getElementById(e.target.id);
        button.style.display = 'none';
        const form = document.getElementById('taskFormInput');
        form.style.display = 'grid';
    });

    taskContainer.appendChild(addBtns);

    taskContainer.appendChild(createForm());

    return taskContainer;
}

function createForm() {
    const form = document.createElement('form');
    form.classList.add('taskForm');
    form.setAttribute('id', 'taskFormInput');

    const input = document.createElement('input');
    input.type = 'text';
    form.appendChild(input);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add');
    addBtn.textContent = "Add";
    form.appendChild(addBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel');
    cancelBtn.textContent = "Cancel"
    form.appendChild(cancelBtn);

    form.style.display = "none";

    return form;
}

function loadTaskContainer() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createTaskBox());
}

export default loadTaskContainer;