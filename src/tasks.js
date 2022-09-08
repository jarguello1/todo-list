
export default function Task(name, dueDate = 'no date', project = 'no project') {
      this.name = name;
      this.dueDate = dueDate;
      this.project = project;
  
    this.setName = function(name) {
      this.name = name;
    }
  
    this.getName = function() {
      return this.name;
    }
  
    this.setDate = function(dueDate) {
      this.dueDate = dueDate;
    }
  
    this.getDate = function() {
      return this.dueDate;
    }

    this.setProject = function(project) {
        this.project = project;
    }

    this.getProject = function() {
      return this.project;
    }
  
    this.getDateFormatted = function() {
      const day = this.dueDate.split('/')[0];
      const month = this.dueDate.split('/')[1];
      const year = this.dueDate.split('/')[2];
      return `${month}/${day}/${year}`;
    }
  }