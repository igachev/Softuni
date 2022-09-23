function centuriesToMinutes(numberOfCenturies) {
let years = numberOfCenturies * 100;
let days = Math.trunc(365.2422 * years);
let hours = days * 24;
let minutes = hours * 60;

let output = `${numberOfCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`

 console.log(output);
}

centuriesToMinutes(1)
centuriesToMinutes(5)