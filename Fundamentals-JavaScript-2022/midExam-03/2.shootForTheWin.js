function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number)
    let index = 0;
    let shotTargets = []
    let valueBeforeShooting = 0
    let countTargetShooted = 0;

while (input[index] !== 'End') {

    for (let i = 0; i < targets.length; i++) {

    let indexOfTarget = Number(input[index])

    if(i === indexOfTarget) {
        countTargetShooted++
        valueBeforeShooting = targets[i]
        targets[i] = - 1
        shotTargets.push(indexOfTarget)

        targets = targets.map((num, index) => {

    if (!shotTargets.includes(index) && num > valueBeforeShooting) {
        num -= valueBeforeShooting
        }

    else if(!shotTargets.includes(index) && num <= valueBeforeShooting) {
        num += valueBeforeShooting
        }
        return num;
        })

        }
        }
        index++
    }

    console.log(`Shot targets: ${countTargetShooted} -> ${targets.join(' ')}`);
}

shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]))