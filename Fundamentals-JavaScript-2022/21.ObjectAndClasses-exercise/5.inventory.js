function inventory(input) {
    let heroData = []
   
for(let i = 0; i < input.length; i++) {
    let [name , level , ...items] = input[i].split(' / ')
    heroData.push( {Hero:name, level:parseInt(level), items: items[0]} )
}

let sortHeroByLevel = heroData.sort((a,b) => a.level - b.level)

sortHeroByLevel.forEach((hero) => {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
})

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])