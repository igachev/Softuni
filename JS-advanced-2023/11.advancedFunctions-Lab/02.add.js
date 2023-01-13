function solution(num1) {
    return (num2) => {
        return num1 + num2;
    }
}


let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));