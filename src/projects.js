function Project(name) {
    this.name = name;
    let tasklist = [];
}

function Task(name, date = "No date") {
    this.name = name;
    this.date = date;
}

let allTasks = new Project('All Tasks');
let todayTasks = new Project('Today');
let weekTasks = new Project('Today');
