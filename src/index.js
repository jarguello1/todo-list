import loadTaskContainer from "./tasks";
import loadToday from "./today";
import loadWeek from "./week";

let myTasks = [];

function Task(name, date = "No date") {
    this.name = name;
    this.date = date;
}

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

const taskBtn = document.getElementById('taskBtn');
taskBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(taskBtn);
    loadTaskContainer();
  });

const todayBtn = document.getElementById('todayBtn');
todayBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(todayBtn);
    loadToday();
  });

const weekBtn = document.getElementById('weekBtn');
  weekBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(weekBtn);
  loadWeek();
});

function newTask() {
    const task = document.createElement('div');
    task.classList.add('task');
}

const addBtn = document.getElementById("addProjects");
addBtn.addEventListener('click', (e) => {
    const button = document.getElementById(e.target.id);
    button.style.display = 'none';
    sideForm.style.display = 'grid';
});

const sideForm = document.getElementById('sideForm');
function getTask() {
    //get task from user
}

function addTaskToList() {
    // add the task to a list of tasks
}

function updateListDisplay() {
    // update displayed list so that it shows new tasks
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.defaultBtns');

    buttons.forEach((button) => {
        if (button !== this) {
        button.classList.remove('active');
    }
    });

    button.classList.add('active');
}