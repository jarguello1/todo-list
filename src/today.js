function createToday() {
    const today = document.createElement('div');
    today.setAttribute('id', 'today');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "Today's Tasks";
    today.appendChild(title);

    const dailyTask = document.createElement('div');
    dailyTask.classList.add('taskList');
    today.appendChild(dailyTask);

    return today;
}

function loadToday() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createToday());
}

export default loadToday;