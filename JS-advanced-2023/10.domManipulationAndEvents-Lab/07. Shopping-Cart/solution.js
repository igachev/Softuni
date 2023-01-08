function solve() {
   //TODO...
   let result = []
   let totalPrice = 0;
   let textArea = document.querySelector('textarea')
   let allAddBtns = Array.from(document.querySelectorAll('.add-product'))
   let checkOutBtn = document.querySelector('.checkout')
   allAddBtns.forEach((btn) => {
      btn.addEventListener('click',(e) => {
         let itemPrice = e.currentTarget.parentElement.nextElementSibling.textContent;
         totalPrice += Number(itemPrice)
         let itemName = e.currentTarget.parentElement.previousElementSibling.children[0].textContent;
         if(!result.find((e) => e === itemName)) {
            result.push(itemName)
         }
         let txt = `Added ${itemName} for ${Number(itemPrice).toFixed(2)} to the cart.\n`
         textArea.value += txt;
      })
   })

   checkOutBtn.addEventListener('click',() => {
      let info = `You bought ${result.join(', ')} for ${totalPrice.toFixed(2)}.`
      textArea.value += info;
      checkOutBtn.setAttribute('disabled','false')
      allAddBtns.forEach((btn) => {
         btn.setAttribute('disabled','false')
      })
   })
}