function attachEvents() {
    const enumIcon = {
        "Sunny":"&#x2600",
        "Partly sunny":"&#x26C5",
        "Overcast":"&#x2601",
        "Rain":"&#x2614",
        "Degrees":"&#176"
    }
    let btn = document.getElementById('submit')
    let url = `http://localhost:3030/jsonstore/forecaster/locations`
    let forecast = document.getElementById('forecast')

    btn.addEventListener('click',async() => {
       try {
        let label = document.querySelector('.label')
        if(label.textContent !== 'Current conditions') {
            label.textContent = 'Current conditions'
        }

        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        let location = document.getElementById('location').value;
        let findCity = data.find(({name}) => name === location)
        let codeId = findCity.code;
        
        let getToday = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${codeId}`)
        let todayData = await getToday.json()
        console.log(todayData)
        let low = todayData.forecast.low;
        let high = todayData.forecast.high
        let condition = todayData.forecast.condition;
        let name = todayData.name;
      
        forecast.style.display = 'block'

        let current = document.getElementById('current')
        let forecasts = document.createElement('div')
        forecasts.classList.add('forecasts')

        const iconSpan = document.createElement('span')
        iconSpan.classList.add('condition')
        iconSpan.classList.add('symbol')
        iconSpan.innerHTML = enumIcon[condition]

        const conditionSpan = document.createElement('span')
        conditionSpan.classList.add('condition')

        const nameSpan = document.createElement('span')
        nameSpan.classList.add('forecast-data')
        nameSpan.textContent = name

        const tempSpan = document.createElement('span')
        tempSpan.classList.add('forecast-data')
        tempSpan.innerHTML = `${low}${enumIcon['Degrees']}/${high}${enumIcon['Degrees']}`

        const currentCondition = document.createElement('span')
        currentCondition.classList.add('forecast-data')
        currentCondition.textContent = condition
        
        
        conditionSpan.appendChild(nameSpan)
        conditionSpan.appendChild(tempSpan)
        conditionSpan.appendChild(currentCondition)
        forecasts.appendChild(iconSpan)
        forecasts.appendChild(conditionSpan)

        if(current.children.length > 1) {
            current.removeChild(current.lastChild)
        }
        
        current.appendChild(forecasts)

        let upcoming = document.getElementById('upcoming')

        if(upcoming.style.display === 'none') {
            upcoming.style.display = 'block'
        }

        let getUpcoming = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${codeId}`)
        let upcomingData = await getUpcoming.json()

        let container = document.createElement('div')
        container.classList.add('forecast-info')

        upcomingData.forecast.forEach((data) => {
            let spanHolder = document.createElement('span')
        spanHolder.classList.add('upcoming')

        let symbolSpan = document.createElement('span')
        symbolSpan.classList.add('symbol')
        symbolSpan.innerHTML = enumIcon[data.condition]

        let degreesSpan = document.createElement('span')
        degreesSpan.classList.add('forecast-data')
        degreesSpan.innerHTML = `${data.low}${enumIcon['Degrees']}/${data.high}${enumIcon['Degrees']}`

        let condSpan = document.createElement('span')
        condSpan.classList.add('forecast-data')
        condSpan.textContent = data.condition

        spanHolder.appendChild(symbolSpan)
        spanHolder.appendChild(degreesSpan)
        spanHolder.appendChild(condSpan)
        container.appendChild(spanHolder)
        })

        if(upcoming.children.length > 1) {
            upcoming.removeChild(upcoming.lastChild)
        }

        upcoming.appendChild(container)
        
       } catch (error) {
        forecast.style.display = 'block'
        let label = document.querySelector('.label')
        label.textContent = 'Error'
        let forecasts = document.querySelector('.forecasts')
        let upcoming = document.getElementById('upcoming')
        if(forecasts !== null) {
            forecasts.style.display = 'none'
        }
        upcoming.style.display = 'none'
       }
    })
}

attachEvents();