function createPerson(firstName,lastName) {
const result = {
    firstName:firstName,
    lastName:lastName,
}

Object.defineProperty(result,"fullName",{
    get() {
        return this.firstName + ' ' + this.lastName
    },

    set(value) {
        let fullNameLength = value.split(' ')
        if(fullNameLength.length !== 2) {
            throw new Error('invalid full name')
        }
        else {
            this.firstName = fullNameLength[0]
            this.lastName = fullNameLength[1]
        }
    }
    
})

return result
}

let person = createPerson("Peter", "Ivanov");

console.log(person.fullName); //Peter Ivanov

person.firstName = "George";

console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";

console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla