function encodeAndDecodeMessages() {
  
  let messageReceived = document.getElementsByTagName('textarea')[1]
  let encodeBtn = document.getElementsByTagName('button')[0]
  let decodeBtn = document.getElementsByTagName('button')[1]

  encodeBtn.addEventListener('click',() => {
    let messageWritten = document.getElementsByTagName('textarea')[0].value;
    let letterByLetter = messageWritten.split('')
    let text = ''
    for(let i = 0; i < letterByLetter.length; i++) {
      let letterCode = letterByLetter[i].charCodeAt()
      let changeLetter = letterCode + 1;
      text += String.fromCharCode(changeLetter)
    }
    messageReceived.value = text;
    document.getElementsByTagName('textarea')[0].value = ''
  })


  decodeBtn.addEventListener('click',() => {
    let encodedMessage = document.getElementsByTagName('textarea')[1].value;
    let letterByLetter = encodedMessage.split('')
    let text = ''
    for(let i = 0; i < letterByLetter.length; i++) {
      let letterCode = letterByLetter[i].charCodeAt()
      let changeLetter = letterCode - 1;
      text += String.fromCharCode(changeLetter)
    }
    document.getElementsByTagName('textarea')[1].value = text;
  })
}