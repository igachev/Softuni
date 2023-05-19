
class Ticket {

    destination: string;
    price: number;
    status: string;
    output: object[] = []

    constructor(public arrayOfStrings: string[], public criteria: string) {
        this.arrayOfStrings = arrayOfStrings;
        this.criteria = criteria;
    }

    storeTickets(): void {
        let arr = this.arrayOfStrings;

       for(let text of arr) {
        let splitText = text.split('|')
        this.destination = splitText[0]
        this.price = Number(splitText[1])
        this.status = splitText[2]

        let obj = {destination:this.destination, price:this.price, status:this.status}
        this.output.push(obj)
       }
        
    }

    sortTickets(): object[] {
        let sortedArr: object[] = []
       switch(this.criteria) {
        case 'destination':
         sortedArr = this.output.sort((a,b) => a['destination'].localeCompare(b['destination']))
        break;

        case 'price':
        sortedArr = this.output.sort((a,b) => a['price'] - b['price'])
        break;

        case 'status':
        sortedArr = this.output.sort((a,b) => a['status'].localeCompare(b['status']))
        break;
       }

       return sortedArr
    }

    printTickets(): void {
        let arr = this.output
        let result:string = '[ ';

        for(let ticket of arr) {
            result += `Ticket { destination: ${ticket['destination']}, price: ${ticket['price']} status: ${ticket['status']} }`
        }

        result += ' ]'
        console.log(result);
    }
    
}

let ticket = new Ticket([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination')

ticket.storeTickets()
ticket.sortTickets()
ticket.printTickets()