function solve() {
let generateBtn = document.getElementsByTagName('button')[0]
let buyBtn = document.getElementsByTagName('button')[1]
let boughtFurniture = []

  
generateBtn.addEventListener('click',() => {
  let furnitureText = JSON.parse(document.getElementsByTagName('textarea')[0].value)
  //console.log(furnitureText);
  let table = document.querySelector('.table tbody')
  for(let i = 0; i < furnitureText.length; i++) {
   // console.log(furnitureText[i]);
    let image = furnitureText[i].img;
    let name = furnitureText[i].name;
    let price = furnitureText[i].price;
    let decFactor = furnitureText[i].decFactor
    let mark = document.createElement('input')
    mark.type = 'checkbox'

    let imgElement = document.createElement('img')
    imgElement.src = image;

    let tdImg = document.createElement('td')
    let tdName = document.createElement('td')
    let tdPrice = document.createElement('td')
    let tdDecFactor = document.createElement('td')
    let tdMark = document.createElement('td')

    tdImg.appendChild(imgElement)
    tdName.textContent = name;
    tdPrice.textContent = price;
    tdDecFactor.textContent = decFactor;
    tdMark.appendChild(mark)

    let newRow = document.createElement('tr');
    newRow.appendChild(tdImg)
    newRow.appendChild(tdName)
    newRow.appendChild(tdPrice)
    newRow.appendChild(tdDecFactor)
    newRow.appendChild(tdMark)

    table.appendChild(newRow)
  }
})


buyBtn.addEventListener('click',() => {
  let allMarkFields = Array.from(document.querySelectorAll("input[type='checkbox']"))
  let totalPrice = 0;
  let avgDecFactor = 0;
  let decFactorSum = 0;
  let countDecFactor = 0;

  allMarkFields.forEach((mark) => {
    if(mark.checked) {
      let furnitureName = mark.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      let furniturePrice = Number(mark.parentElement.previousElementSibling.previousElementSibling.textContent);
      let furnitureDecFactor = Number(mark.parentElement.previousElementSibling.textContent);
      decFactorSum += furnitureDecFactor
      countDecFactor++

      totalPrice += furniturePrice;
      boughtFurniture.push(furnitureName)
      
    }
  })
    avgDecFactor = decFactorSum / countDecFactor
  let result = document.getElementsByTagName('textarea')[1]
      result.value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`
})
}