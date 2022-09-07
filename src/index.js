import loadTaskContainer from "./taskList";
import loadToday from "./today";
import loadWeek from "./week";
import Storage from "./storage";
import Project from "./projects";
import Task from "./tasks";

let todoList = [];
allProjects = new Project(all);
todayProject = new Project(today);
weekProject = new Project(week);

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

function createTaskRow() {
    
}

function submitTask(that) {
    event.preventDefault();
    let newTask = new Task(that.name);
    myLibrary.push(newBook);
    taskFormInput.reset();
    updateDisplay();
    closeWindow();
    return false;
}

function submitProject(that) {
    event.preventDefault();
    let newProject = new Project(that.name);
    todoList.push(newProject);
    sideForm.reset();
    updateDisplay();
    closeWindow();
    return false;
}

function updateDisplay() {
    let activeTab = document.querySelector('.active');
    if (activeTab.id === 'taskBtn') {
        const container = document.getElementById('taskContainer');
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => container.removeChild(task));
        for (let i=0; i < allProjects; i++) {
            createTaskRow(allProject[i]);
        }
    } else if (activeTab.id === 'todayBtn') {
        const container = document.getElementById('today');
    } else if (activeTab.id === 'weekBtn') {
        const container = document.getElementById('week');
        
    }
    
}

(function () {
    setActiveButton(document.querySelector(".defaultBtns"));
    loadTaskContainer();
})();