function solve(n) {
    
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        if(i%2 !== 0 && n > 0) {
            sum += i;
            n--
            console.log(i);
        }
        
    }
    console.log(`Sum: ${sum}`);
}

solve(5)
solve(3)