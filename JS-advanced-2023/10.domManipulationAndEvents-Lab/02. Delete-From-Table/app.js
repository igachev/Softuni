function deleteByEmail() {
    let isDeleted = false;
   let result = document.getElementById('result')
   let textInput = document.querySelector('input[type=text]').value;
   let tableEmailFields = Array.from(document.querySelectorAll('#customers tbody tr td:nth-child(2)'))
   
   tableEmailFields.forEach((email) => {
    if(textInput === email.textContent) {
        let currentRow = email.parentNode;
        currentRow.parentNode.removeChild(currentRow)
        result.textContent = 'Deleted.'
        isDeleted = true;
        return;
    }
   })

   if(!isDeleted) {
    result.textContent = 'Not found.'
   }
}