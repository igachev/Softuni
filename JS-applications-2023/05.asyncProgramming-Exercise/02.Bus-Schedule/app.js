 function solve() {
let infoBox = document.querySelector('.info')
let departBtn = document.getElementById("depart"); 
let arriveBtn = document.getElementById("arrive");

let stop = {
    next:'depot'
}

  async function depart() {
    try {
    departBtn.disabled = true
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
    const res = await fetch(url)
    stop = await res.json()
    infoBox.textContent = `Next stop ${stop.name}`
    arriveBtn.disabled = false;
    } catch (error) {
        departBtn.disabled = true;
        arriveBtn.disabled = true;
        infoBox.textContent = 'Error'
    }
    
    
    }

    function arrive() {
            infoBox.textContent = `Arriving at ${stop.name}`
            departBtn.disabled = false
            arriveBtn.disabled = true 
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

