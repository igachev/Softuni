function tickets(arr,sortingCriteria) {
let storage = []

class Ticket {
    constructor(destination,price,status) {
        this.destination = destination
        this.price = Number(price)
        this.status = status
    }
}

for(let text of arr) {
    let [destination,price,status] = text.split('|')
    storage.push(new Ticket(destination,price,status))
}
let sortArr;

 if(sortingCriteria === 'destination') {
    sortArr = storage.sort((a,b) => a.destination.localeCompare(b.destination))
 }
 else if(sortingCriteria === 'status') {
    sortArr = storage.sort((a,b) => a.status.localeCompare(b.status))
 }
 else if(sortingCriteria === 'price') {
    sortArr = storage.sort((a,b) => a.price - b.price)
 }
return sortArr
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'))

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')