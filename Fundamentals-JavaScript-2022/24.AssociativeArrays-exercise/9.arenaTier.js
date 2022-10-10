function arenaTier(input) {
    let index = 0;
    let listOfGladiators = { }
    let gladiator,technique,skill;
    let gladiator1,vs,gladiator2;
    
    while(input[index] !== 'Ave Cesar') {
        
    let gladiatorCharacter = input[index]
    
    if(gladiatorCharacter.includes('->')) {
         [gladiator,technique,skill] = gladiatorCharacter.split(' -> ')
    }
    else {
         [gladiator1,vs,gladiator2] = gladiatorCharacter.split(' ') 
    }
    
        if(!listOfGladiators.hasOwnProperty(gladiator)) {
            listOfGladiators[gladiator] = { }
        }
    
        if(!listOfGladiators[gladiator].hasOwnProperty(technique)) {
            listOfGladiators[gladiator][technique] = skill;
            
        }
    
        else {
            let currentSkill = listOfGladiators[gladiator][technique]
            if(currentSkill < skill) {
                listOfGladiators[gladiator][technique] = skill;
            }
        }
    
        if(vs === 'vs') {
              
            if(listOfGladiators.hasOwnProperty(gladiator1) && listOfGladiators.hasOwnProperty(gladiator2)) {
               let commonTechnique = false;
               let gladiator1Keys = Object.keys(listOfGladiators[gladiator1])
               let gladiator2Keys = Object.keys(listOfGladiators[gladiator2])
    
               for(let i = 0; i < gladiator1Keys.length; i++) {
                if(gladiator2Keys.indexOf(gladiator1Keys[i]) !== -1) {
                    commonTechnique = true;
                }
               }
    
               if(commonTechnique) {
                let pointsGladiator1 = 0;
                let pointsGladiator2 = 0;
                let gladiator1Values = Object.values(listOfGladiators[gladiator1])
                let gladiator2Values = Object.values(listOfGladiators[gladiator2])
                
                for(let points of gladiator1Values) {
                    pointsGladiator1 += Number(points)
                }
               
                for(let points of gladiator2Values) {
                    pointsGladiator2 += Number(points)
                }
    
                if(pointsGladiator1 > pointsGladiator2) {
                    delete listOfGladiators[gladiator2]
                }
                else {
                    delete listOfGladiators[gladiator1]
                }
    
               }
            }
        }
    
    index++
    }
    
    let entries = Object.entries(listOfGladiators)
    
    for(let [key,values] of entries) {
    let techniqueValues = Object.values(values);
    let sum = 0;
    
    for(let value of techniqueValues) {
        sum += Number(value)
        listOfGladiators[key]['totalPoints'] = sum;
    }  
    }
    
    let sortedEntries = entries.sort((a,b) => b[1].totalPoints - a[1].totalPoints || a[0].localeCompare(b[0]))
    
    for(let [key,value] of sortedEntries) {
        let result = `${key}: ${listOfGladiators[key].totalPoints} skill\n`
        delete listOfGladiators[key].totalPoints
      let techniqueEntries = Object.entries(value)
      let sortAlphabetically = techniqueEntries.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      let arrLength = 1
      
      for(let [techniqueName,techniqueValue] of sortAlphabetically) {
        
        if(arrLength < sortAlphabetically.length) {
            result += `- ${techniqueName} <!> ${techniqueValue}\n`
            arrLength++
        }
        else {
            result += `- ${techniqueName} <!> ${techniqueValue}`
        }
        
      }
      console.log(result);
    }
    }
    
    arenaTier([
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
        ])
    
    arenaTier([
        'Peter -> BattleCry -> 400',
        'Alex -> PowerPunch -> 300',
        'Stefan -> Duck -> 200',
        'Stefan -> Tiger -> 250',
        'Ave Cesar'
        ])