function heroesOfCodeAndLogic(input) {
let numberOfHeroes = Number(input.shift())
let index = 0;
let heroes = []

for(let i = 0; i < numberOfHeroes; i++) {
let heroInfo = input.shift()
let [heroName,hp,mp] = heroInfo.split(' ')
if(hp > 100) {
    hp = 100;
}
if(mp > 200) {
    mp = 200;
}
heroes.push({hero:heroName,hp:Number(hp),mp:Number(mp)})
}

while(input[index] !== 'End') {
let [command,heroName,mpNeeded,spellName] = input[index].split(' - ')
switch(command) {
    case 'CastSpell':
    castSpell(heroName,mpNeeded,spellName)
    break;

    case 'TakeDamage':
        takeDamage(heroName,mpNeeded,spellName)
    break;

    case 'Recharge':
        recharge(heroName,mpNeeded)
    break;

    case 'Heal':
        heal(heroName,mpNeeded)
    break;
}
    index++
}

for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i].hero);
    console.log(`  HP: ${heroes[i].hp}`);
    console.log(`  MP: ${heroes[i].mp}`);
}

function castSpell(heroName,mpNeeded,spellName) {
for(let i = 0; i < heroes.length; i++) {
    if(heroes[i].hero === heroName) {
        let heroCurrentMp = heroes[i].mp;
        if(mpNeeded <= heroCurrentMp) {
            heroCurrentMp -= mpNeeded
            heroes[i].mp = heroCurrentMp
    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroCurrentMp} MP!`);
        }
        else {
    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }
}
}

function takeDamage(heroName,damage,attacker) {
    damage = Number(damage)
    for(let i = 0; i < heroes.length; i++) {
        if(heroes[i].hero === heroName) {
            let heroCurrentHp = heroes[i].hp;
            heroCurrentHp -= damage
            heroes[i].hp = heroCurrentHp
            if(heroCurrentHp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroCurrentHp} HP left!`);
            }
            else {
                heroes.splice(i,1)
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        }
    }
}

function recharge(heroName,amount) {
    amount = Number(amount)
    for(let i = 0; i < heroes.length; i++) {
        if(heroes[i].hero === heroName) {
            let heroCurrentMp = heroes[i].mp;
            heroCurrentMp += amount
            heroes[i].mp = heroCurrentMp
            let recharged = amount
            
            if(heroCurrentMp > 200) {
                let difference =  heroCurrentMp - 200;
             recharged = amount - difference;
             heroes[i].mp = 200
            }
            
                console.log(`${heroName} recharged for ${recharged} MP!`); 
        }
    }
}

function heal(heroName,amount) {
    amount = Number(amount)
    for(let i = 0; i < heroes.length; i++) {
        if(heroes[i].hero === heroName) {
            let heroCurrentHp = heroes[i].hp;
            heroCurrentHp += amount
            heroes[i].hp = heroCurrentHp
            let healed = amount
            if(heroCurrentHp > 100) {
                let difference =  heroCurrentHp - 100
                healed = amount - difference
                heroes[i].hp = 100
            }
    console.log(`${heroName} healed for ${healed} HP!`);
        }
    }
}
}

/* heroesOfCodeAndLogic([
    '2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth',
'End'
]) */

heroesOfCodeAndLogic([
    '4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'
])