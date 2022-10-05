function meetings(input) {
    let meetingAppointments = new Map()
    for(let value of input) {
        let [weekDay, person] = value.split(' ')
        if(!meetingAppointments.has(weekDay)) {
            meetingAppointments.set(weekDay,person)
            console.log(`Scheduled for ${weekDay}`);
        }
        else {
            console.log(`Conflict on ${weekDay}!`);
        }
    }
    
    let keys = Array.from(meetingAppointments.keys())
    for(let key of keys) {
        console.log(`${key} -> ${meetingAppointments.get(key)}`);
    }
    }
    
    meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])