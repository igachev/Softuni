function printCertificate(grade,arr) {

if(pass(grade)) {
    printHeader()
    printName(arr)
    formatGrade(grade)
}
else {
    let msg = `${arr[0]} ${arr[1]} does not qualify`
    console.log(msg);
}



    function pass(grade) {
        return grade >= 3
    }

    function printName(arr) {
        console.log(arr[0] + ' ' + arr[1]);
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function formatGrade(grade) {
        if(grade < 3) {
            console.log(`Fail (2)`);
        }
        else if(grade >=3 && grade < 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`);
        }
        else if(grade >=3.50 && grade < 4.50) {
            console.log(`Good (${grade.toFixed(2)})`);
        }
        else if(grade >=4.50 && grade < 5.50) {
            console.log(`Very good (${grade.toFixed(2)})`);
        }
        else if(grade >= 5.50) {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}

printCertificate(5.25,['Peter','Carter'])