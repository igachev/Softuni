function cityTaxes(cityName,population,treasury) {
    return {
        name:cityName,
        population:population,
        treasury:treasury,
        taxRate:10,

        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },

        applyGrowth(percentage) {
            this.population += Math.floor((percentage / 100) * this.population)
        },

        applyRecession(percentage) {
            this.treasury -= Math.floor((percentage / 100) * this.treasury)
        }

    }
    
}

const city =

cityTaxes('Tortuga',

7000,

15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);