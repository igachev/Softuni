function search() {
 let searchText = document.getElementById('searchText').value;
 let allTowns = document.querySelectorAll('ul#towns li')
 let numberOfItems = 0;

 for(let town of allTowns) {
   if(town.innerText.includes(searchText)) {
      numberOfItems++
      town.style.textDecoration = 'underline'
      town.style.fontWeight = 'bold'
   }
 }
 let res = document.getElementById('result')
 res.innerText = `${numberOfItems} matches found`
}
