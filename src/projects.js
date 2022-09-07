import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default function Project(name) {
    this.name = name
    this.tasks = []
  

  this.setName = function(name) {
    this.name = name
  }

  this.getName = function() {
    return this.name
  }

  this.setTasks = function(tasks) {
    this.tasks = tasks
  }

  this.getTasks = function() {
    return this.tasks
  }

  this.getTask = function(taskName) {
    return this.tasks.find((task) => task.getName() === taskName)
  }

  this.contains = function(taskName) {
    return this.tasks.some((task) => task.getName() === taskName)
  }

  this.addTask = function(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return
    this.tasks.push(newTask)
  }

  this.deleteTask = function(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName)
  }

  this.getTasksToday = function() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted())
      return isToday(toDate(taskDate))
    })
  }

  this.getTasksThisWeek = function() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted())
      return isThisWeek(subDays(toDate(taskDate), 1))
    })
  }
}