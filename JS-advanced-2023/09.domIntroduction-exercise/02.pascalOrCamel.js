function solve() {
  let result = ''
  let text = document.getElementById('text').value.toLowerCase()
  let caseType = document.getElementById('naming-convention').value
  let resultElement = document.getElementById('result')

  if(caseType === 'Camel Case') {
    let splitText = text.split(' ')
    splitText.forEach((e,i) => {
      if(i === 0) {
        result += e.toLowerCase()
      }
      else {
        result += e[0].toUpperCase() + e.substring(1)
      }
    })
  }

  else if(caseType === 'Pascal Case') {
    let splitText = text.split(' ')
    splitText.forEach((e) => {
      result += e[0].toUpperCase() + e.substring(1)
    })
  }

  else {
    result = 'Error!'
  }

  resultElement.innerText = result
}