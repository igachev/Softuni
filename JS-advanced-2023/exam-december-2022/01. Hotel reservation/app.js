window.addEventListener('load', solve);

function solve() {
let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let dateIn = document.getElementById('date-in')
let dateOut = document.getElementById('date-out')
let peopleCount = document.getElementById('people-count')
let nextBtn = document.getElementById('next-btn')

nextBtn.addEventListener('click',sendToReservation);


function sendToReservation(e) {
    e.preventDefault();

    if(firstName.value === '' || lastName.value === '' || dateIn.value === '' ||
dateOut.value === '' || peopleCount.value === '' ||
new Date(dateIn.value).getTime() > new Date(dateOut.value).getTime()) {
    return;
}
else {
    let infoList = document.querySelector('.info-list')
    let li = document.createElement('li')
    li.classList.add('reservation-content')
    let article = document.createElement('article')

    let h3 = document.createElement('h3')
    h3.textContent = `Name: ${firstName.value} ${lastName.value}`

    let p1 = document.createElement('p')
    p1.textContent = `From date: ${dateIn.value}`

    let p2 = document.createElement('p')
    p2.textContent = `To date: ${dateOut.value}`

    let p3 = document.createElement('p')
    p3.textContent = `For ${peopleCount.value} people`

    let editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click',editInfo)

    let continueBtn = document.createElement('button')
    continueBtn.classList.add('continue-btn')
    continueBtn.textContent = 'Continue'
    continueBtn.addEventListener('click',confirmReservation)

    article.appendChild(h3)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(p3)
    li.appendChild(article)

    li.appendChild(editBtn)
    li.appendChild(continueBtn)
    infoList.appendChild(li)

    nextBtn.disabled = true

    firstName.value = ''
    lastName.value = ''
    dateIn.value = ''
    dateOut.value = ''
    peopleCount.value = ''

}

}

function editInfo(e) {
let h3 = e.target.parentElement.children[0].children[0].textContent;
let text = h3.split(' ')
let first = text[1]
let last = text[2]
firstName.value = first
lastName.value = last

let firstDate = e.target.parentElement.children[0].children[1].textContent;
let splitDateIn = firstDate.split(' ')
dateIn.value = splitDateIn[2]

let secondDate = e.target.parentElement.children[0].children[2].textContent;
let splitDateOut = secondDate.split(' ')
dateOut.value = splitDateOut[2]

let count = e.target.parentElement.children[0].children[3].textContent;
let splitCount = count.split(' ')
peopleCount.value = splitCount[1]

nextBtn.disabled = false;
e.target.parentElement.remove()
}

function confirmReservation(e) {
    let confirmList = document.querySelector('.confirm-list')
    let copyNode = e.target.parentElement.cloneNode(true)
    copyNode.children[1].remove()
    copyNode.children[1].remove()
    let confirmBtn = document.createElement('button')
    confirmBtn.classList.add('confirm-btn')
    confirmBtn.textContent = 'Confirm'
    confirmBtn.addEventListener('click',reservationState)
    copyNode.appendChild(confirmBtn)

    let cancelBtn = document.createElement('button')
    cancelBtn.classList.add('cancel-btn')
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click',cancelState)
    copyNode.appendChild(cancelBtn)
    confirmList.appendChild(copyNode)

    e.target.parentElement.remove()
}

function reservationState(e) {
    let verification = document.getElementById('verification')
    verification.textContent = 'Confirmed.'
    verification.classList.add('reservation-confirmed')
    nextBtn.disabled = false;
    e.target.parentElement.remove()
}

function cancelState(e) {
    let verification = document.getElementById('verification')
    verification.textContent = 'Cancelled.'
    verification.classList.add('reservation-cancelled')
    nextBtn.disabled = false;
    e.target.parentElement.remove()
}
    }



    
    
