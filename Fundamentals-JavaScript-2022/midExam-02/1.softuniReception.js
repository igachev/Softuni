function softuniReception(input) {
let studentsCount = Number(input.pop())
let firstEmployeeEfficiency = Number(input.shift())
let secondEmployeeEfficiency = Number(input.shift())
let thirdEmployeeEfficiency = Number(input.shift())
let questions = 0;
let hour = 0;

let answeredQuestionsPerHour = (firstEmployeeEfficiency +
secondEmployeeEfficiency + thirdEmployeeEfficiency)

while(questions < studentsCount) {
    hour++

    if(hour % 4 === 0) {
        hour++
    } 

        questions += answeredQuestionsPerHour  
}

console.log(`Time needed: ${hour}h.`);
}

softuniReception(['5','6','4','20'])
softuniReception(['1','2','3','45'])