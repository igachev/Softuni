function solve() {
let table = document.querySelector('#results tbody')
let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click',addStudent)
 getStudents()

 //-------- get functionality ----------------
async function getStudents() {
    let res = await fetch(`http://localhost:3030/jsonstore/collections/students`)
    let data = await res.json()
    const students = Object.values(data)
    displayStudents(students)
}

function displayStudents(arr) {
table.replaceChildren(...arr.map(studentCard))
}

function studentCard(student) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>
    `
    return tr;
}
//----------------------------------

//---------- post functionality -------------
async function postStudent(firstName,lastName,facultyNumber,grade) {
const body = {
    firstName,
    lastName,
    facultyNumber,
    grade
}

let res = await fetch(`http://localhost:3030/jsonstore/collections/students`,{
    method:'post',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
})

const data = await res.json()
return data;
}

async function addStudent(e) {
    e.preventDefault()
    let firstNameInput = document.getElementsByTagName('input')[0].value;
    let lastNameInput = document.getElementsByTagName('input')[1].value;
    let facultyNumberInput = document.getElementsByTagName('input')[2].value;
    let gradeInput = document.getElementsByTagName('input')[3].value;

    if(firstNameInput !== '' && lastNameInput !== '' &&
    facultyNumberInput !== '' && gradeInput !== '') {
    await postStudent(firstNameInput,lastNameInput,facultyNumberInput,gradeInput)
    }
}
}

solve()