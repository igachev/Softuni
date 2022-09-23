function vacation(people,typeOfPeople,day) {
    let price = 0;
    let totalPrice = 0;
    let discount = 0;
    if(typeOfPeople === 'Students') {
      if(day === 'Friday') {
        price = 8.45;
        totalPrice = price * people
      }
      else if(day === 'Saturday') {
        price = 9.80;
        totalPrice = price * people
      }
      else if(day === 'Sunday') {
        price = 10.46;
        totalPrice = price * people
      }
      
      if(people >= 30) {
        discount = 15 / 100 * totalPrice;
        totalPrice -= discount
      }
    }
    
    if(typeOfPeople === 'Business') {
      if(day === 'Friday') {
        price = 10.90;
        totalPrice = price * people
      }
      else if(day === 'Saturday') {
        price = 15.60;
        totalPrice = price * people
      }
      else if(day === 'Sunday') {
        price = 16;
        totalPrice = price * people
      }
      
      if(people >= 100) {
        discount = 10 * price;
        totalPrice -= discount
      }
    }
    
    if(typeOfPeople === 'Regular') {
      if(day === 'Friday') {
        price = 15;
        totalPrice = price * people
      }
      else if(day === 'Saturday') {
        price = 20;
        totalPrice = price * people
      }
      else if(day === 'Sunday') {
        price = 22.50;
        totalPrice = price * people
      }
      
      if(people >= 10 && people <= 20) {
        discount = 5 / 100 * totalPrice;
        totalPrice -= discount
      }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
  }
  
  vacation(30,
  "Students",
  "Sunday")
  
  vacation(40,
  "Regular",
  "Saturday")