function companyUsers(input) {
    let companies = new Map()
for(value of input) {
    let [companyName,employeeId] = value.split(' -> ')
    if(!companies.has(companyName)) {
        companies.set(companyName,new Set())
        let set = companies.get(companyName)
        set.add(employeeId)
    }
    else {
        let currentEmployees = companies.get(companyName)
        currentEmployees.add(employeeId)
        companies.set(companyName,currentEmployees)
    }
}

let keys = Array.from(companies.keys())
let sortCompaniesAscending = keys.sort((a,b) => a.localeCompare(b))

for(let company of sortCompaniesAscending) {
    console.log(company);
   let companyEmployees = companies.get(company);
   companyEmployees.forEach((employee) => {
    console.log(`-- ${employee}`);
   })
}
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])