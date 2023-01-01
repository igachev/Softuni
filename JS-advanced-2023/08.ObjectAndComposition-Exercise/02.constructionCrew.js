function constructionCrew(obj) {
if(obj.dizziness) {
    let requiredAmount = 0.1 * obj.weight * obj.experience
    obj.levelOfHydrated = obj.levelOfHydrated + requiredAmount
    obj.dizziness = false;
}
return obj;
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }))

console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));