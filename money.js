const buildingList = {
  TEMPLE: {
    name: "Temple",
    cost: 100,
    output: 10
  }
}

class Building {
  constructor(buildingName) {
    this.name = buildingName.name
    this.cost = buildingName.cost
    this.output = buildingName.output
  }
}

const jobList = {
  UNEMPLOYED: {
    title: "Unemployed",
    description: "A person without gainful employment.",
    wage: 0
  },
  PRIEST: {
    title: "Priest",
    description: "A member of the clergy.",
    wage: 5
  }
}

class Job {
  constructor(jobTitle) {
    this.title = jobTitle.title
    this.description = jobTitle.description
    this.wage = jobTitle.wage
  }
}

class Person {
  constructor() {
    this.name = "Person"
    this.job = new Job(jobList.UNEMPLOYED)
  }

  setJob(newJob) {
    this.job = new Job(newJob)
  }
}

var temple = new Building(buildingList.TEMPLE)
var priest = new Person()
priest.setJob(jobList.PRIEST)

console.log(temple)
console.log(priest)
console.log(priest.job.title)
