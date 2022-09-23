function login(input) {
    let username = input.shift()
   let correctPassword = reversedPassword(username);
   let index = 0;
   
   while(index < input.length) {
     let password = input[index]
    
      if(password === correctPassword) {
       console.log(`User ${username} logged in.`)
       break;
     }
     else if(index === 3) {
       console.log(`User ${username} blocked!`)
       break;
     }
     else if(password !== correctPassword) {
       console.log('Incorrect password. Try again.')
     }
     index++
   }
   
    
    function reversedPassword(username) {
      let result = ''
      for(let i = username.length-1; i >= 0; i--) {
        result += username[i]
      }
      return result;
    }
    
  }

login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['momo','omom'])