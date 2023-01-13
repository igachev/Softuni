function filterEmployees(data,criteria) {
data = JSON.parse(data)
let counter = 0;
let [prefix,value] = criteria.split('-')

function eachObj(obj) {
    let data = print.call(obj)
    counter++
    return data;
}

let filteredData;
 if(prefix !== 'all') {
     filteredData = data.filter((obj) => obj[prefix] === value)
 }
 else {
    filteredData = data;
 }
 
 return filteredData.map(eachObj).join('\n')

function print() {
    return `${counter}. ${this.first_name} ${this.last_name} - ${this.email}`
}
}

console.log(filterEmployees(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female'))

    console.log(filterEmployees(`[{

        "id": "1",
        
        "first_name": "Kaylee",
        
        "last_name": "Johnson",
        
        "email": "k0@cnn.com",
        
        "gender": "Female"
        
        }, {
            "id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'last_name-Johnson'))