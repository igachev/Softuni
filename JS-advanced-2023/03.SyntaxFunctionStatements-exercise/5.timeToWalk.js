function timeToWalk(steps,footLength,speed) {
    let distance = steps * (footLength/1000)
    
    let additionalTime = Math.floor(distance / (500/1000))
    
let time = (steps * (footLength/1000)) / speed
time += additionalTime/60
let hours = Math.floor(time / 60)
let minutes = (time*60)
let seconds = time*60 - Math.floor(time*60)
    seconds = Math.round(seconds * 60) 
    hours += Math.floor(minutes/60)
    minutes = Math.floor((time*60) % 60)

let formattedHours = hours < 10 ? `0${hours}` : `${hours}`
let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}` 

console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)