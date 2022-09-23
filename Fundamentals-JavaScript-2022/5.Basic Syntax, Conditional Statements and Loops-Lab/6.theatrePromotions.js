function theatrePromotions(typeOfDay,ageOfPerson) {

let singleTicketPrice = 0;

if(ageOfPerson < 0 || ageOfPerson > 122 ) {
console.log('Error!');
return;
}

else if(ageOfPerson >= 0 && ageOfPerson <= 18 ) {
    if(typeOfDay === 'Weekday') {
        singleTicketPrice = 12;
    }
    else if(typeOfDay === 'Weekend') {
        singleTicketPrice = 15;
    }
    else if(typeOfDay === 'Holiday') {
        singleTicketPrice = 5;
    }


}

else if(ageOfPerson > 18 && ageOfPerson <= 64) {
    if(typeOfDay === 'Weekday') {
        singleTicketPrice = 18;
    }
    else if(typeOfDay === 'Weekend') {
        singleTicketPrice = 20;
    }
    else if(typeOfDay === 'Holiday') {
        singleTicketPrice = 12;
    }
    
}

else if(ageOfPerson > 64 && ageOfPerson <= 122) {
    if(typeOfDay === 'Weekday') {
        singleTicketPrice = 12;
    }
    else if(typeOfDay === 'Weekend') {
        singleTicketPrice = 15;
    }
    else if(typeOfDay === 'Holiday') {
        singleTicketPrice = 10;
    }
}
console.log(`${singleTicketPrice}$`);

}

theatrePromotions('Weekday',42)
theatrePromotions('Holiday',-12)
theatrePromotions('Holiday',15)
theatrePromotions('Weekday',0)