//console.log('TODO:// Implement Home functionality');
document.querySelectorAll('a').forEach((link) => 
link.classList.remove('active'));
document.getElementById('home').classList.add('active')
document.querySelector('#catches').innerHTML = ''
let userData = null;

window.addEventListener('DOMContentLoaded',() => {
    
     userData = JSON.parse(sessionStorage.getItem('userData'))
    //loadData()
    if(userData != null) {
        document.getElementById('guest').style.display = 'none'
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('p.email span').textContent = userData.email
        loadData()
    }
    else {
        document.getElementById('user').style.display = 'none'
        document.querySelector('p.email span').textContent = 'guest'
        document.querySelector('#addForm .add').disabled = true;
        const btns = [...document.querySelector('main').querySelectorAll('button')]
        btns.forEach(x => {
            if (x.className !== 'load')
                x.disabled = true
        })
      //  loadData()
       
    }

    document.querySelector('.load').addEventListener('click',loadData)
    document.getElementById('addForm').addEventListener('submit',onCreateSubmit)
 })

 document.getElementById('logout').addEventListener('click',onLogout)

 async function onLogout() {
   // userData = JSON.parse(sessionStorage.getItem('userData'))
    if(userData != null) {
        const token = userData.token;
       // console.log(token);
        const res = await fetch('http://localhost:3030/users/logout',{
            method:'get',
            headers: {
                'Content-Type':'application/json',
                'X-Authorization':token
            }
        })
        sessionStorage.clear()
        userData = null;
      // loadData()
       document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none'
        document.querySelector('p.email span').textContent = 'guest'
        document.querySelector('#addForm .add').disabled = true;
        const btns = [...document.querySelector('main').querySelectorAll('button')]
        btns.forEach(x => {
            if (x.className !== 'load')
                x.disabled = true
        })
       // loadData()
       
       
    }
 }

 async function onCreateSubmit(e) {
    e.preventDefault()

   // if(!userData) {
     //   window.location = './login.html'
     //   return;
  //  }

    const formData = new FormData(e.target)

    const angler = formData.get('angler')
    const weight = formData.get('weight')
    const species = formData.get('species')
    const locationInput = formData.get('location')
    const bait = formData.get('bait')
    const captureTime = formData.get('captureTime')

    const data = {
        angler,
        weight,
        species,
        location:locationInput,
        bait,
        captureTime
    }

  // const data = [...formData.entries()].reduce((a,[k,v]) => Object.assign(a,{ [k] : v }), {})
   
   try {
    if(Object.values(data).some(x => x == '')) {
        throw new Error('All fields are required')
    }
    const res = await fetch(`http://localhost:3030/data/catches`,{
        method:'post',
        headers: {
            'Content-Type':'application/json',
            'X-Authorization':userData.token
        },
        body:JSON.stringify(data)
    })

    if(res.ok != true) {
        const error = await res.json()
        throw new Error(error.message)
    }

    e.target.reset()
   // loadData()

   } catch (err) {
   alert(err.message)
   }
 }

 async function loadData() {
    
    const res = await fetch(`http://localhost:3030/data/catches`)
    const data = await res.json()
    
    document.getElementById('catches').replaceChildren(...data.map(createPreview))

    let deleteBtns = document.querySelectorAll('.delete')
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click',onDelete)
    })

    let updateBtns = document.querySelectorAll('.update')
    updateBtns.forEach((btn) => {
        btn.addEventListener('click',updateCatch)
    })
 }

 async function onDelete(e) {
    let ownedCatchId = e.target.dataset.id;
    const res = await fetch(`http://localhost:3030/data/catches/${ownedCatchId}`,{
       method:'delete',
       headers: {
        'Content-Type':'application/json',
        'X-Authorization':userData.token
    }
    })
    
    const data = await res.json()
    e.target.parentElement.remove()
    return data;
 }

 async function onUpdate(id,catchItem,token) {
    const response = await fetch(`http://localhost:3030/data/catches/${id}`,{
        method:'put',
        headers: {
            'Content-Type':'application/json',
            'X-Authorization':token
        },
        body:JSON.stringify(catchItem)
    })
    const data = await response.json()
    return data;
    }

    async function updateCatch(e) {
        let ownedCatchId = e.target.dataset.id;
        let token = userData.token
       // console.log(e.target.parentElement.children[1].value);
        let angler = e.target.parentElement.children[1].value;
        let weight = e.target.parentElement.children[3].value;
        let species = e.target.parentElement.children[5].value;
        let locationInput = e.target.parentElement.children[7].value;
        let bait = e.target.parentElement.children[9].value
        let captureTime = e.target.parentElement.children[11].value
        
        await onUpdate(ownedCatchId,{angler,weight,species,location:locationInput,bait,captureTime},token)
        await loadData()
        
    } 

  function createPreview(item) {
    const isOwner = (userData && item._ownerId == userData.id)
    
    const element = document.createElement('div')
    element.className = 'catch'
    element.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
    <label>Weight</label>
    <input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
    <label>Species</label>
    <input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
    <label>Location</label>
    <input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
    <label>Bait</label>
    <input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
    <button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
    <button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>` 

    return element
 }