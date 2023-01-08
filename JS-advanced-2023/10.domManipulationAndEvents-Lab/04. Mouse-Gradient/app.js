function attachGradientEvents() {
    let result = document.getElementById('result')
    let gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove',gradientMove)
    gradient.addEventListener('mouseout',gradientOut)

    function gradientMove(event) {
       // console.log(e.target.clientWidth);
      // console.log(e.offsetX);
      let percentage = (event.offsetX / event.target.clientWidth - 1)
      percentage = Math.trunc(Math.floor(percentage * 100))
      let currentPercentage = 100 + percentage
      result.textContent = currentPercentage + '%'
    }

    function gradientOut() {
        result.textContent = ''
    }
}