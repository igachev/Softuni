class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName
        this.participants = {}
        this.listOfFinalists = []
    }

    addParticipant(participantName, participantGender) {
        if(!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender
    return `A new participant has been added - ${participantName}`
        }
        else {
    return `${participantName} has already been added to the list`
        }
    }

    completeness(participantName, condition) {
        if(!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        }
        else if(this.participants.hasOwnProperty(participantName) && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }

        let disciplinesCompleted = Math.floor(condition / 30);

        if(disciplinesCompleted < 3) {
    return `${participantName} could only complete ${disciplinesCompleted} of the disciplines`
        }
        else {
            let finalistGender = this.participants[participantName]
            this.listOfFinalists.push({participantName,finalistGender})
    return `Congratulations, ${participantName} finished the whole competition`
        }
    }

    rewarding(participantName) {
        let checkParticipant = this.listOfFinalists.find((finalist) => 
        finalist.participantName === participantName);
        if(checkParticipant) {
            return `${participantName} was rewarded with a trophy for his performance`
        }
        else {
            return `${participantName} is not in the current finalists list`
        }
    }

    showRecord(criteria) {
        if(this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`
        }
        
        else if(criteria === 'male' || criteria === 'female') {
        let checkGender = this.listOfFinalists.find((player) => 
        player.finalistGender === criteria)
       
       if(checkGender) {
        return `${checkGender.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
       }
       else {
        return `There are no ${criteria}'s that finished the competition`
       }
        }

        else if(criteria === 'all') {
            let result = ''
            result +=`List of all ${this.competitionName} finalists:`;
        let sortNamesAsc = this.listOfFinalists.sort((a,b) => a.participantName.localeCompare(b.participantName))
       // console.log(sortNamesAsc);
        for(let i = 0; i < sortNamesAsc.length; i++) {
            result += `\n${sortNamesAsc[i].participantName}`;
        }
        return result
        }

    }
}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));