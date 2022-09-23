function daysOfWeek(n) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
        'Saturday', 'Sunday']

       
    switch (n) {
        case 1:
            console.log(days[0]);
            break;

        case 2:
            console.log(days[1]);
            break;

        case 3:
            console.log(days[2]);
            break;

        case 4:
            console.log(days[3]);
            break;

        case 5:
            console.log(days[4]);
            break;

        case 6:
            console.log(days[5]);
            break;

        case 7:
            console.log(days[6]);
            break;

        default:
            console.log('Invalid day!');
            break;
    }
}

daysOfWeek(3)
daysOfWeek(33)

 /*
        Other way
        if(day >= 1 && day <= 7) {
            console.log(days[day-1])
        }
        else {
            console.log('Invalid day!')
        }
        */