const mongoose = require('mongoose')

const Cat = require('./models/Cat.js')

async function main() {

mongoose.set('strictQuery',false)
await mongoose.connect('mongodb://127.0.0.1:27017/catShelter')
console.log('database connected');

//await saveCat('Garry',4,'angora')
const cats = await readCats()
cats.forEach((cat) => {
    cat.makeSound()
    console.log(cat.info);
})
let oneCat = await readCat('Garry')
console.log(oneCat);
await updateCat('Nav','Pesho')
}

async function saveCat(name,age,breed) {
const cat = new Cat({
    name,
    age,
    breed
})

await cat.save()
}

async function readCats() {
    const cats = await Cat.find()
    console.log(cats);
    return cats;
}

async function readCat(name) {
    const cat = await Cat.findOne({ name })
    return cat
}

async function updateCat(name, newName) {
    await Cat.updateOne({name}, {name:newName})
}

main()