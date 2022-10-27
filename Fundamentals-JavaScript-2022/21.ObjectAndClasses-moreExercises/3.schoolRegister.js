function schoolRegister(input) {
let register = { }

for(let i = 0; i < input.length; i++) {
    let text = input[i]
    let splitByComma = text.split(', ')
    let studentName = splitByComma[0].split(' ');
    let grade = splitByComma[1].split(' ');
    let averageScore = splitByComma[2].split(' ')
   // console.log(studentName[2],grade[1],averageScore[5]);

    if(averageScore[5] >= 3) {
        if(!register.hasOwnProperty(grade[1])) {
            register[grade[1]] = {}
            register[grade[1]][studentName[2]] = Number(averageScore[5])
        }
        else {
            register[grade[1]][studentName[2]] = Number(averageScore[5])
        }
    }
      
}
       
let entries = Object.entries(register)
for(let [key,values] of entries) {
    console.log(`${Number(key)+1} Grade`);

    let listOfStudents = Object.keys(register[key])
    console.log(`List of students: ${listOfStudents.join(', ')}`)

   let vals = Object.values(values)
  let annualScore = 0;
  for(let score of vals) {
    annualScore += score;
  }
  console.log(`Average annual score from last year: ${(annualScore/vals.length).toFixed(2)}\n`);
}
  
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])