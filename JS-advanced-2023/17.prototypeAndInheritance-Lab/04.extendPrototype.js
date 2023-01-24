function extendPrototype(Class) {
    Class.prototype.species = 'Human'
    Class.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Person {
constructor(name,email) {
    this.name = name;
    this.email = email;
}
}

extendPrototype(Person)
let p1 = new Person('Maria','maria@gmail.com')
console.log(p1.toSpeciesString());
