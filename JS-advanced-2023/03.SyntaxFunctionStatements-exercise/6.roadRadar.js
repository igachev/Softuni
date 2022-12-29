function roadRadar(currentSpeed,area) {
    let limit = 0;
    let status = ''

if(area === 'city') {
     limit = 50
}

else if(area === 'motorway') {
    limit = 130
}

else if(area === 'interstate') {
    limit = 90
}

else if(area === 'residential') {
    limit = 20
}

if(currentSpeed <= limit) {
console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
}

else if(currentSpeed > limit) {
    let speedDifference = currentSpeed - limit;
    if(speedDifference > 0 && speedDifference <= 20) {
        status = 'speeding'
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
    else if(speedDifference > 20 && speedDifference <= 40) {
        status = 'excessive speeding'
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
    else {
        status = 'reckless driving'
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')