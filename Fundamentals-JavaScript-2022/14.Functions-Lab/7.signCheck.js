function signCheck(numOne,numTwo,numThree) {
        let numOnePositive;
        let numTwoPositive;
        let numThreePositive;
        
        if(numOne >= 0) {
            numOnePositive = true;
        }
        else {
            numOnePositive = false;
        }
        
        if(numTwo >= 0) {
            numTwoPositive = true;
        }
        else {
            numTwoPositive = false;
        }
        
        if(numThree >= 0) {
            numThreePositive = true;
        }
        else {
            numThreePositive = false;
        }
        
        if(numOnePositive && numTwoPositive && numThreePositive) {
            console.log('Positive');
        }
        
        else if(numOnePositive && numTwoPositive && !numThreePositive) {
            console.log('Negative');
        }
        
        else if(numOnePositive && !numTwoPositive && !numThreePositive) {
            console.log('Positive');
        }
        
        else if(!numOnePositive && numTwoPositive && !numThreePositive) {
            console.log('Positive');
        }
        
        else if(numOnePositive && !numTwoPositive && numThreePositive) {
            console.log('Negative');
        }
        
        else if(!numOnePositive && !numTwoPositive && numThreePositive) {
            console.log('Positive');
        }
        
        else if(!numOnePositive && numTwoPositive && numThreePositive) {
            console.log('Negative');
        }
        
        else if(!numOnePositive && !numTwoPositive && !numThreePositive) {
            console.log('Negative');
        }
        }
        
        signCheck(5,12,-15)
        signCheck(-6,-12,14)
        signCheck(-1,-2,-3)
        signCheck(-5,1,1)