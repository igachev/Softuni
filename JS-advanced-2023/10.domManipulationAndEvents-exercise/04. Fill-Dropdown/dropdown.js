function addItem() {
    let menu = document.getElementById('menu')
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;
    let optionElement = document.createElement('option')
    optionElement.textContent = newItemText
    optionElement.value = newItemValue
    menu.appendChild(optionElement)
    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''

}