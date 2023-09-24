async function getInfo() {
  let busId = document.getElementById('stopId').value;
  const stopName = document.getElementById('stopName')
    const list = document.getElementById('buses')
    list.innerHTML = ''
    stopName.innerHTML = ''
    
    try {
    const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId}`)
    //console.log(response);
    
    const data = await response.json() 
    //console.log(data);
    stopName.textContent = data.name
    //console.log(data.buses);

        let keys = Object.keys(data.buses)

       for(let k of keys) {
        let li = document.createElement('li')
        li.textContent = 'Bus ' + k + ' arrives in ' + data.buses[k] + ' minutes'
        list.appendChild(li)
       }

    
    } catch (error) {
        stopName.textContent = 'Error'
    }
}