function lockedProfile() {
let allShowBtns = Array.from(document.querySelectorAll('button'))
allShowBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
     let unlockBtn = e.currentTarget.parentElement.children[4]
     let unlockBtnStatus = unlockBtn.checked;
     let hiddenFields = e.currentTarget.parentElement.children[9];
        if(unlockBtnStatus === true && btn.textContent === 'Show more') {
            hiddenFields.style.display = 'block'
            btn.textContent = 'Hide it'
        }
        else if(unlockBtnStatus === true && btn.textContent === 'Hide it') {
                hiddenFields.style.display = 'none'
                btn.textContent = 'Show more'
        }
    })
})

}