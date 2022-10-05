function schoolGrades(input) {
    let schoolBook = new Map()
    
    for(let value of input) {
        let [name, ...grades] = value.split(' ')
        grades = grades.map(Number)
        if(!schoolBook.has(name)) {
            schoolBook.set(name,grades)
        }
        else {
            let currentGrades = schoolBook.get(name)
            let addNewGrades = currentGrades.concat(grades)
            schoolBook.set(name,addNewGrades)
        }
    }
    
    let keys = Array.from(schoolBook.keys())
    let sortedKeys = keys.sort((a,b) => a.localeCompare(b))
    for(let key of sortedKeys) {
        let sumGrades = 0;
        let grades = schoolBook.get(key);
        for(let grade of grades) {
            sumGrades += grade;
        }
        let avgGrade = sumGrades / grades.length
        console.log(`${key}: ${avgGrade.toFixed(2)}`);
    }
    }
    
    schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])