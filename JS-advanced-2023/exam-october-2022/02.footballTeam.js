class footballTeam {
    constructor(clubName,country) {
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers) {

        for(let text of footballPlayers) {
    let playerExist = false;
    let playerOldSalary,playerIndex;

    let [name,age,playerValue] = text.split('/')
    playerValue = Number(playerValue)
    age = Number(age)
    
    for(let i = 0; i < this.invitedPlayers.length; i++) {
        if(this.invitedPlayers[i].name === name) {
            playerExist = true;
            playerOldSalary = this.invitedPlayers[i].playerValue
            playerIndex = i;
            break;
        }
    }

    if(!playerExist) {
        this.invitedPlayers.push({name,age,playerValue})
    }
    else {
        if(playerValue > playerOldSalary) {
        this.invitedPlayers[playerIndex].playerValue = playerValue
        }
    }
   
        }
 return `You successfully invite ${this.invitedPlayers.map((player) => player.name).join(", ")}.`
    }

    signContract(selectedPlayer) {
    let splitText = selectedPlayer.split('/')
    let playerName = splitText[0]
    let playerOffer = Number(splitText[1])
    let playerExist = false;
    let playerOldOffer,playerIndex;

    for(let i = 0; i < this.invitedPlayers.length; i++) {
        if(this.invitedPlayers[i].name === playerName) {
            playerExist = true;
            playerOldOffer = this.invitedPlayers[i].playerValue
            playerIndex = i;
            break;
        }
    }

    if(!playerExist) {
        throw new Error(`${playerName} is not invited to the selection list!`)
    }
    else {
        if(playerOffer < playerOldOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${this.invitedPlayers[playerIndex].name}, ${this.invitedPlayers[playerIndex].playerValue - playerOffer} million more are needed to sign the contract!`)
        }
        else {
            this.invitedPlayers[playerIndex].playerValue = 'Bought' 
        }
    }

    return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`
    }


    ageLimit(name,age) {
        let playerExist = false;
        let playerIndex
        for(let i = 0; i < this.invitedPlayers.length; i++) {
            if(this.invitedPlayers[i].name === name) {
                playerExist = true;
                playerIndex = i;
                if(this.invitedPlayers[i].age >= age) {
                    return `${name} is above age limit!`
                }
                break;
            }
        }

        if(!playerExist) {
    throw new Error(`${name} is not invited to the selection list!`)
        }
        else {
            let ageDifference = age - this.invitedPlayers[playerIndex].age;
            if(ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }
            else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }

    }


    transferWindowResult() {
        
        let result = []
        result.push("Players list:");
        this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name)).map((player) => result.push(`Player ${player.name}-${player.playerValue}`))
        return result.join('\n')
    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());