function matchFullName(str) {
    let splitByComma = str.split(', ')
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = []
    let validName = pattern.exec(splitByComma)
    while(validName != null) {
        validNames.push(validName[0])
        validName = pattern.exec(splitByComma)
    }
    console.log(validNames.join(' '));
    }
    
    matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")