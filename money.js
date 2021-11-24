

const buildingList = {
  TEMPLE: {
    name: "Temple",
    cost: 100,
    output: 10
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
  },
  //
}

const eraList = {
  NEOLITHIC = {}, //Stone Age
  BRONZE_AGE = {},
  IRON_AGE = {},
  ANTIQUITY = {},
  MEDIEVAL = {}, //Middle Ages
  EARLY_MODERN = {}, //Renaissance
  LATE_MODERN = {}, //Industrialization
  DIGITAL = {}, //Contemporary
  FUTURE = {} //??? 
}

class Building {
  constructor(buildingName) {
    this.name = buildingName.name
    this.cost = buildingName.cost
    this.output = buildingName.output
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

function main() {
  var temple = new Building(buildingList.TEMPLE)
  var priest = new Person()
  priest.setJob(jobList.PRIEST)

  console.log(temple)
  console.log(priest)
  console.log(priest.job.title)
}

main();

/* TODOS:

- make UI and clickable buttons, output and global stats for each

- need a way to regulate income in form of money per second, while having a continuous stream of income 
(ex. if user gets $1000/s it is a continuous increase of 1, 2, 3, ... all the way to 1000 in the course of one second)

- create list of buildings/people

- there is a net pool of people which slowly grows/shrinks depending on global prosperity, 
and the # of people which can be in your employ is a function of both the # of buildings owned and the total population

- need various upgrades/powers to grow as the # of buildings/people/$ all grows or certain criteria are met

- 

*/

