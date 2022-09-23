function reading(numOfPages,pagesPerOneHour,days) {
let totalTimeToReadTheBook = numOfPages / pagesPerOneHour;
let requiredHoursPerDay = totalTimeToReadTheBook / days;
console.log(requiredHoursPerDay);
}

reading(212,20,2)
reading(432,15,4)