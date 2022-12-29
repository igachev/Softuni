function mathOperations(n1,n2,str) {
    let result = 0;
switch(str) {
    case '+':
     result = n1 + n2;
     console.log(result);
    break;

    case '-':
     result = n1 - n2;
     console.log(result);
    break;

    case '*':
     result = n1 * n2;
     console.log(result);
    break;

    case '/':
     result = n1 / n2;
     console.log(result);
    break;

    case '%':
     result = n1 % n2;
     console.log(result);
    break;

    case '**':
     result = n1 ** n2;
     console.log(result);
    break;
}
}

mathOperations(5, 6, '+')
