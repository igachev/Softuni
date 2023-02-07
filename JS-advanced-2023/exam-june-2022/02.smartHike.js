class SmartHike {
    constructor(username) {
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100
    }

    addGoal(peak,altitude) {
        if(!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude
    return `You have successfully added a new goal - ${peak}`
        }
        else {
    return `${peak} has already been added to your goals`
        }
    }

    hike (peak, time, difficultyLevel) {
        if(!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }

       else if(this.goals.hasOwnProperty(peak) && this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }

        let difference = this.resources - (time * 10);

        if(difference < 0) {
        return "You don't have enough resources to complete the hike"
        }
        else {
            this.resources = difference
            
            this.listOfHikes.push({ peak, time, difficultyLevel })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest (time) {
        let restTime = time * 10;
        this.resources += restTime

        if(this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        else {
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }

    showRecord (criteria) {
        if(this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        switch(criteria) {
            case 'hard':
            let hikes1 = this.listOfHikes.filter((hike) => hike.difficultyLevel === 'hard')
            if(hikes1.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            else {
                let sortByTime = hikes1.sort((a,b) => a[0].time - b[0].time)
            return `${this.username}'s best ${criteria} hike is ${sortByTime[0].peak} peak, for ${sortByTime[0].time} hours`
            }
            break;

            case 'easy':
                let hikes2 = this.listOfHikes.filter((hike) => hike.difficultyLevel === 'easy')
                if(hikes2.length === 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                else {
                    let sortByTime = hikes2.sort((a,b) => a[0].time - b[0].time)
                return `${this.username}'s best ${criteria} hike is ${sortByTime[0].peak} peak, for ${sortByTime[0].time} hours`
                }
            break;

            case 'all':
                let result = 'All hiking records:'
                for(let i = 0; i < this.listOfHikes.length; i++) {
                    result += `\n${this.username} hiked ${this.listOfHikes[i].peak} for ${this.listOfHikes[i].time} hours`
                }
                return result;
            break;
        }
    }
}

const user = new SmartHike('Vili');
console.log(user.showRecord('all'));