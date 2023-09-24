function attachEvents() {
  let phonebook = document.getElementById('phonebook')
  let btnLoad = document.getElementById('btnLoad')
  let btnCreate = document.getElementById('btnCreate')
  

  btnLoad.addEventListener('click',getContacts)
  
  btnCreate.addEventListener('click',addContact)

  // get functionality
  async function getContacts() {
    const res = await fetch('http://localhost:3030/jsonstore/phonebook')
    const data = await res.json()
    const contacts = Object.values(data)
    displayContacts(contacts)
  }

  function displayContacts(contacts) {
    phonebook.replaceChildren(...contacts.map(contactCard))
  }

  function contactCard(contact) {
    let li = document.createElement('li')
    li.textContent = `${contact.person}: ${contact.phone}`
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click',onDelete)
    li.appendChild(deleteBtn)
    li.id = contact._id
    return li;
  }
// -------------------------

/* delete functionality */
  async function deleteContact(id) {
   const res = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`,{
        method:'delete'
    })
    document.getElementById(id).remove()
    const data = await res.json()
    return data;
  }

  function onDelete(e) {
   let contactId = e.target.parentElement.id
   deleteContact(contactId)
  }
  // ----------------------- //

  // post functionality

   async function postContact(person,phone) {
    const body = {
        person,
        phone
    }
    const res = await fetch('http://localhost:3030/jsonstore/phonebook',{
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    
    return data;
   }

  async function addContact() {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;
     await postContact(person,phone)
     getContacts()
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
   }
  // -----------------------
}

attachEvents();