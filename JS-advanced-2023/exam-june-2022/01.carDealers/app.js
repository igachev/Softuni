window.addEventListener("load", solve);

function solve() {
  let copyFields
let make = document.getElementById('make')
let model = document.getElementById('model')
let year = document.getElementById('year')
let fuel = document.getElementById('fuel')
let originalCost = document.getElementById('original-cost')
let sellingPrice = document.getElementById('selling-price')

let tableBody = document.getElementById('table-body')
let carsList = document.getElementById('cars-list')
let profit = document.getElementById('profit')
let sumSold = 0;

let form = document.querySelector('.form-wrapper form')
form.addEventListener('submit',(e) => {
  e.preventDefault();

  if(make.value === '' || model.value === '' || year.value === '' ||
  fuel.value === '' || originalCost.value === '' ||
  sellingPrice === '' || Number(originalCost.value) > Number(sellingPrice.value)) {
    return;
  }

  let tr = document.createElement('tr')
  tr.classList.add('row')

  let td1 = document.createElement('td')
  td1.textContent = make.value;

  let td2 = document.createElement('td')
  td2.textContent = model.value;

  let td3 = document.createElement('td')
  td3.textContent = year.value;

  let td4 = document.createElement('td')
  td4.textContent = fuel.value;

  let td5 = document.createElement('td')
  td5.textContent = originalCost.value;

  let td6 = document.createElement('td')
  td6.textContent = sellingPrice.value;

  let td7 = document.createElement('td')
  let editBtn = document.createElement('button')
  editBtn.classList.add('action-btn')
  editBtn.classList.add('edit')
  editBtn.textContent = 'Edit'
  editBtn.addEventListener('click',editInfo)
  td7.appendChild(editBtn)

  let sellBtn = document.createElement('button')
  sellBtn.classList.add('action-btn')
  sellBtn.classList.add('sell')
  sellBtn.textContent = 'Sell'
  sellBtn.addEventListener('click',sellCar)
  td7.appendChild(sellBtn)

  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)
  tr.appendChild(td5)
  tr.appendChild(td6)
  tr.appendChild(td7)

  copyFields = tr.cloneNode(true)
  //console.log(copyFields);

  tableBody.appendChild(tr)

   make.value = ''
   model.value = ''
   year.value = ''
   fuel.value = ''
   originalCost.value = ''
   sellingPrice.value = ''
})

function editInfo(e) {
  make.value = copyFields.children[0].textContent
  model.value = copyFields.children[1].textContent
  year.value = copyFields.children[2].textContent
  fuel.value = copyFields.children[3].textContent
  originalCost.value = copyFields.children[4].textContent
  sellingPrice.value = copyFields.children[5].textContent

  let rowElement = e.target.parentElement.parentElement;
  rowElement.remove()
}

function sellCar(e) {
  let trInfo = e.target.parentElement.parentElement;
  let li = document.createElement('li')
  li.classList.add('each-list')

  let span1 = document.createElement('span')
  span1.textContent = `${trInfo.children[0].textContent} ${trInfo.children[1].textContent}`

  let span2 = document.createElement('span')
  span2.textContent = `${trInfo.children[2].textContent}`

  let difference = Number(trInfo.children[5].textContent) - Number(trInfo.children[4].textContent)
  sumSold += Number(difference)
  let span3 = document.createElement('span')
  span3.textContent = `${difference}`

  li.appendChild(span1)
  li.appendChild(span2)
  li.appendChild(span3)
  carsList.appendChild(li)

  profit.textContent = sumSold.toFixed(2)
  
  trInfo.remove()
}
}
