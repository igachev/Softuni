var Ticket = /** @class */ (function () {
    function Ticket(arrayOfStrings, criteria) {
        this.arrayOfStrings = arrayOfStrings;
        this.criteria = criteria;
        this.output = [];
        this.arrayOfStrings = arrayOfStrings;
        this.criteria = criteria;
    }
    Ticket.prototype.storeTickets = function () {
        var arr = this.arrayOfStrings;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var text = arr_1[_i];
            var splitText = text.split('|');
            this.destination = splitText[0];
            this.price = Number(splitText[1]);
            this.status = splitText[2];
            var obj = { destination: this.destination, price: this.price, status: this.status };
            this.output.push(obj);
        }
    };
    Ticket.prototype.sortTickets = function () {
        var sortedArr = [];
        switch (this.criteria) {
            case 'destination':
                sortedArr = this.output.sort(function (a, b) { return a['destination'].localeCompare(b['destination']); });
                break;
            case 'price':
                sortedArr = this.output.sort(function (a, b) { return a['price'] - b['price']; });
                break;
            case 'status':
                sortedArr = this.output.sort(function (a, b) { return a['status'].localeCompare(b['status']); });
                break;
        }
        return sortedArr;
    };
    Ticket.prototype.printTickets = function () {
        var arr = this.output;
        var result = '[ ';
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var ticket_1 = arr_2[_i];
            result += "Ticket { destination: ".concat(ticket_1['destination'], ", price: ").concat(ticket_1['price'], " status: ").concat(ticket_1['status'], " }");
        }
        result += ' ]';
        console.log(result);
    };
    return Ticket;
}());
var ticket = new Ticket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
ticket.storeTickets();
ticket.sortTickets();
ticket.printTickets();
