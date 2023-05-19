
class Employee {
    name: string;
    age: number;
    salary: number;
    tasks: string [];
    

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work(): void {
      let currentTask = this.tasks.shift()
      this.tasks.push(currentTask!)
      console.log(`${this.name} ${currentTask}`);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month`);
    }

    getSalary(): number {
        return this.salary
    }

}

class Junior extends Employee {

    constructor(name: string, age:number) {
        super(name,age);
        this.tasks.push(` is working on a simple task`)
    }

}

class Senior extends Employee {

    constructor(name: string, age:number) {
        super(name,age);
        this.tasks.push(' is working on a complicated task')
        this.tasks.push(' is taking time off work')
        this.tasks.push(' is supervising junior workers')
    }

}

class Manager extends Employee {
    divident: number

    constructor(name: string, age: number) {
        super(name,age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting')
        this.tasks.push(' is preparing a quarterly meeting')
    }

    getSalary(): number {
        return this.salary + this.divident
    }
}

const junior = new Junior('ivo',23)
junior.salary = 1000
junior.work()
junior.work()
junior.collectSalary()


const senior = new Senior('Ivan',25)
senior.salary = 2000
senior.work()
senior.work()
senior.collectSalary()

const manager = new Manager('Petar',30)
manager.salary = 3000
manager.divident = 200
manager.work()
manager.work()
manager.collectSalary()