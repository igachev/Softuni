async function lockedProfile() {
let url = 'http://localhost:3030/jsonstore/advanced/profiles'
let main = document.getElementById('main')
let prof = document.querySelector('.profile')


try {
    let res = await fetch(url)
    let data = await res.json()
    let entries = Object.entries(data)
    main.innerHTML = ''

    for(let [k,v] of entries) {
        console.log(v);
    
    let newCopy = prof.cloneNode(true)
    
    let lockedState = newCopy.getElementsByTagName('input')[0]
    lockedState.name = `${v._id}`
    
    let unlockedState = newCopy.getElementsByTagName('input')[1] 
    unlockedState.name = `${v._id}` 

    let username = newCopy.getElementsByTagName('input')[2];
    username.value = `${v.username}`

    let userEmail = newCopy.getElementsByTagName('input')[3];
    userEmail.value = `${v.email}`

    let userAge = newCopy.getElementsByTagName('input')[4];
    userAge.value = `${v.age}`

    let hiddenDiv = newCopy.getElementsByTagName('div')[0]
    hiddenDiv.setAttribute('id','user1HiddenFields')
    hiddenDiv.style.display = 'none'

    let btn = newCopy.getElementsByTagName('button')[0]

    
    
    btn.addEventListener('click',() => {
        if(lockedState.checked === true) {
            return;
        }
        else if(unlockedState.checked === true) {
            if(btn.textContent === 'Show more') {
                hiddenDiv.style.display = 'block'
                btn.textContent = 'Hide it'
            }
            else {
                hiddenDiv.style.display = 'none'
                btn.textContent = 'Show more'
            }
        }
    })

    main.appendChild(newCopy)
    }

} catch (error) {
    console.log(error);
}
}