function solve() {
  let textArea = document.getElementById('input').value
  let output = document.getElementById('output')
  let sentenceArr = textArea.split('.').filter((x) => x.length > 0)
output.innerHTML = ''
  let result = ''
  let text = []
  let counter = 0;
  for(let i = 0; i < sentenceArr.length; i++) {
    
    text.push(sentenceArr[i])
    counter++
    if(counter % 3 === 0) {
      result = text.join('. ') + '.'
      output.innerHTML += `<p>${result}</p>`;
      result = ''
      text = []
      counter = 0;
    }
  }
  
 if(counter > 0) {
  result = text.join('. ') + '.'
  output.innerHTML += `<p>${result}</p>`;
 }
}