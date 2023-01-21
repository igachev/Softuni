class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
    if(name === null || name === '' || name === undefined ||
salary === null || salary === '' || salary === undefined || salary < 0 ||
    position === null || position === '' || position === undefined ||
    department === null || department === '' || department === undefined
    ) {
       throw new Error('Invalid input!') 
    }

    if(!this.departments.hasOwnProperty(department)) {
        this.departments[department] = []
        this.departments[department].push({name:name,salary:salary,position:position})
    }
    else {
        this.departments[department].push({name:name,salary:salary,position:position})
    }
    
    return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
      let entries = Object.entries(this.departments)
      let tempBest = ''
      let tempAvg = 0
      let employees
      let employeesResult = ''
      

      for(let [k,v] of entries) {

       let calcAvg = v.reduce((acc,eachSalary) => {
       return acc + eachSalary.salary
       },0)

       let avgSalary = calcAvg / v.length;
       if(avgSalary > tempAvg) {
        employeesResult = ''
        tempAvg = avgSalary
        tempBest = k
        employees = v.sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))
        for(let i = 0; i < employees.length; i++) {
            if(i < employees.length-1) {
                employeesResult += `${employees[i].name} ${employees[i].salary} ${employees[i].position}\n`
            }
            else {
                employeesResult += `${employees[i].name} ${employees[i].salary} ${employees[i].position}`
            }
        }
       }
      }

      return `Best Department is: ${tempBest}\nAverage salary: ${tempAvg.toFixed(2)}\n${employeesResult}`
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());