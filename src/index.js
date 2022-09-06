import loadTasks from "./tasks";

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

const taskbtn = document.getElementById('taskBtn');
taskbtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(taskBtn);
    loadTasks();
  });