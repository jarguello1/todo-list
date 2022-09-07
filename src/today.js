function createToday() {
    const today = document.createElement('div');
    today.setAttribute('id', 'today');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "Today's Tasks";
    today.appendChild(title);

    return today;
}

function loadToday() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createToday());
}

export default loadToday;