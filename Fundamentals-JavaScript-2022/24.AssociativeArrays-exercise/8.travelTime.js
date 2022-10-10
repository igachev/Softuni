function travelTime(input) {
    let travelDestinations = {}
    
    for(let value of input) {
        let [country,town,cost] = value.split(' > ')
        cost = Number(cost)
    
        if(!travelDestinations.hasOwnProperty(country)) {
            travelDestinations[country] = {} 
        }
    
        if(!travelDestinations[country].hasOwnProperty(town)) {
            travelDestinations[country][town] = cost
        }
    
        let currentCost = travelDestinations[country][town];
            if (currentCost > cost) {
                travelDestinations[country][town] = cost;
            }
    
    }
    
    let entries = Object.entries(travelDestinations)
    let sortAlphabetically = entries.sort((a,b) => a[0].localeCompare(b[0]))
    for(let [countryName,townNames] of sortAlphabetically) {
        let result = countryName + ' -> '
       let townEntries = Object.entries(townNames)
       let sortByCost = townEntries.sort((a,b) => a[1] - b[1])
        for(let [townName,costValue] of sortByCost) {
            result += townName + ' -> ' + costValue + ' '
        }
        console.log(result);
    }
    
    }
    
    travelTime([
        'Bulgaria > Sofia > 25000',
        'Bulgaria > Sofia > 25000',
        'Kalimdor > Orgrimar > 25000',
        'Albania > Tirana > 25000',
        'Bulgaria > Varna > 25010',
        'Bulgaria > Lukovit > 10'
        ])
    
    travelTime([
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
        ])