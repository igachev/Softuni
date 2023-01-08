function focused() {
    let sections = Array.from(document.getElementsByTagName('div')[0].children);
   // console.log(sections);
    sections.forEach((section) => {
        let inputField = section.children[1];
        inputField.addEventListener('focus',(e) => {
            section.classList.add('focused')
        })
        inputField.addEventListener('blur',(e) => {
            section.classList.remove('focused')
        })
    })

}