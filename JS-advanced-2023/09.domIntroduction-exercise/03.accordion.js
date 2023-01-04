function toggle() {
let btn = document.querySelector('.button')
let text = document.getElementById('extra')
if(btn.textContent === 'More') {
    text.style.display = 'block'
    btn.innerText = 'Less'
}
else {
    text.style.display = 'none'
    btn.innerText = 'More'
}
}