function employees(input) {
   let object = {}
   for(let i = 0; i < input.length; i++) {
       let name = input[i]
       let phone = name.length
       object['name'] = name;
       object['phone'] = phone;
       console.log(`Name: ${object.name} -- Personal Number: ${object.phone}`);
   }
   
   }

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])