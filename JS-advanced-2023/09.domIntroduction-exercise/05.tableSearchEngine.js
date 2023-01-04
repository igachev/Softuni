function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let searchField = document.getElementById('searchField').value;
   let allRows = Array.from(document.querySelectorAll('.container tbody tr'))

   allRows.forEach((element) => {
      element.classList.remove('select')
   })

   allRows.forEach((element) => {
      if(element.innerHTML.includes(searchField)) {
         element.classList.add('select')
      }
   })
      document.getElementById('searchField').value = ''
      
   }
   
}