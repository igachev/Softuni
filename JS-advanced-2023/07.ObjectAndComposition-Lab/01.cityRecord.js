function cityRecord(cityName,population,treasury) {
let city = {
    name:cityName,
    population:population,
    treasury:Number(treasury)
}

return city;
}

console.log(cityRecord('Tortuga',
7000,
15000))