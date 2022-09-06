import loadTaskContainer from "./tasks";

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

const taskbtn = document.getElementById('taskBtn');
taskbtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(taskBtn);
    loadTaskContainer();
  });

  function newTask() {
    const task = document.createElement('div');
    task.classList.add('task');

  }

  function getTask() {
    //get task from user
  }

  function addTaskToList() {
    // add the task to a list of tasks
  }

  function updateListDisplay() {
    // update displayed list so that it shows new tasks
  }