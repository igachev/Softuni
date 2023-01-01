function heroicInventory(input) {
let heroesRegister = []
for(let text of input) {
    let [name,level,items] = text.split(' / ')
    items = items ? items.split(', ') : []
    let obj = {
        name:name,
        level:Number(level),
        items:items
    }
    heroesRegister.push(obj)
}
console.log(JSON.stringify(heroesRegister));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])