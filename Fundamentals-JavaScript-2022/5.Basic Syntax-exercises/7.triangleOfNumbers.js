function triangle(number) {
    for(let row = 1; row <= number; row++) {
      let result = ''
      for(let column = 1; column <= row; column++) {
        result += row + ' ';
      }
      console.log(result)
    }
  }

//triangle(3)
triangle(5)