function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //   TODO:
      let result = []
      let bestRestaurantId = document.querySelector('#bestRestaurant p')
      let workersId = document.querySelector('#workers p')
      let textArea = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(textArea)
      for(let data of arr) {
         let [name,workerList] = data.split(' - ')
         if(!result.find((e) => e.name === name)) {
            result.push({
               name:name,
               avgSalary:0,
               bestSalary:0,
               sumSalary:0,
               workerList:[]
            })
            
         }
        let currentRestaurant = result.find((e) => e.name === name)
        workerList = workerList && workerList.split(', ')
        for(let currentWorker of workerList) {
         updateRestaurant(currentRestaurant,currentWorker)
        }
      }
      
      let bestRestaurant = result.sort((a,b) => b.avgSalary - a.avgSalary)[0]
      bestRestaurantId.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      let sortListOfWorkers = bestRestaurant.workerList.sort((a,b) => b.salary - a.salary)
      let buff = ''
      for(let worker of sortListOfWorkers) {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `
      }
      workersId.textContent = buff;
   }

   function updateRestaurant(obj,worker) {
      let [name,salary] = worker.split(' ')
      salary = Number(salary)
      obj.sumSalary += salary
      if(obj.bestSalary < salary) {
         obj.bestSalary = salary
      }
      obj.workerList.push({
         name:name,
         salary:salary
      })
      obj.avgSalary = obj.sumSalary / obj.workerList.length
   }
}