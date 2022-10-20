function bonusScoringSystem(input) {
let numberOfStudents = Number(input.shift())
let numberOfLectures = Number(input.shift())
let additionalBonus = Number(input.shift())
let totalBonus = 0;
let maximumBonus = 0;
let attendancesOfMaxStudent = 0;

for(let i = 0; i < input.length; i++) {
    let studentAttendances = parseInt(input[i])
    totalBonus = (studentAttendances / numberOfLectures) * (5 + additionalBonus)
    
    if(totalBonus > maximumBonus) {
        maximumBonus = totalBonus
        attendancesOfMaxStudent = studentAttendances
    }

}

console.log(`Max Bonus: ${Math.ceil(maximumBonus)}.`);
console.log(`The student has attended ${attendancesOfMaxStudent} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])