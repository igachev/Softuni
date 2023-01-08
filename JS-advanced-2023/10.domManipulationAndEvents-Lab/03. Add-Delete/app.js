function addItem() {
    let itemContainer = document.getElementById('items')
    let newItemText = document.getElementById('newItemText').value;

    if(newItemText.length === 0) return;

    let li = document.createElement('li')
    li.textContent = newItemText
    
    
    let remove = document.createElement('a')
    let linkText = document.createTextNode("[Delete]")
    remove.appendChild(linkText)
    remove.href = '#'
    remove.addEventListener('click',deleteItem)

    li.appendChild(remove)
    itemContainer.appendChild(li)

    function deleteItem() {
        li.remove()
    }
}