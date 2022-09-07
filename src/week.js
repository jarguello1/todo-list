function createWeek() {
    const week = document.createElement('div');
    week.setAttribute('id', 'week');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "This Week's Tasks";
    week.appendChild(title);

    return week;
}

function loadWeek() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createWeek());
}

export default loadWeek;