function winningTicket(input) {
    let text = input.split(/[, ]+/g);
    
    for(let ticket of text) {
        let pattern = /(\@{6,}|\${6,}|\^{6,}|\#{6,})/g
        
        let letterByLetter = ticket.split('')
        let leftSide = letterByLetter.slice(0,letterByLetter.length / 2)
        let rightSide = letterByLetter.slice(letterByLetter.length / 2)
        let leftSideValues = ''
        let rightSideValues = ''

        for(let values of leftSide) {
            leftSideValues += values
        }

        for(let values of rightSide) {
            rightSideValues += values
        }

        

       if(leftSideValues.match(pattern) == null ||
       rightSideValues.match(pattern) == null) {
            if(letterByLetter.length === 20) {
                console.log('ticket ' + `"${ticket}"` + ' - ' + 'no match');
            }
            else {
                console.log('invalid ticket');
            }
       }

        if(leftSideValues.match(pattern) != null &&
        rightSideValues.match(pattern) != null) {
        let leftMatch = leftSideValues.match(pattern).toString()
        let rightMatch = rightSideValues.match(pattern).toString()
       
        
            if(leftMatch.length === 10 &&
                rightMatch.length === 10) {
                    console.log('ticket ' + `"${ticket}"` + ' - ' + `${leftMatch.length}${leftMatch[0]}` + ' Jackpot!');
                }
            
              else  if(leftMatch[0] == rightMatch[0]) {
                if(leftMatch.length < rightMatch.length) {
                    console.log('ticket ' + `"${ticket}"` + ' - ' + `${leftMatch.length}${leftMatch[0]}`);
                }
                if(rightMatch.length < leftMatch.length) {
                    console.log('ticket ' + `"${ticket}"` + ' - ' + `${rightMatch.length}${rightMatch[0]}`);
                }
                if(leftMatch.length === rightMatch.length) {
                    console.log('ticket ' + `"${ticket}"` + ' - ' + `${leftMatch.length}${leftMatch[0]}`);
                }
            
            }
        }
    }
    
    }

winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
winningTicket('Cash$$$$$$Ca$$$$$$sh')
winningTicket('validticketnomatch:(')