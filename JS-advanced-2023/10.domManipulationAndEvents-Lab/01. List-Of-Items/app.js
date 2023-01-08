function addItem() {
   let ul = document.getElementById('items')
   let newItemText = document.getElementById('newItemText').value;
   let li = document.createElement('li')
   li.textContent = newItemText
    ul.appendChild(li)
}