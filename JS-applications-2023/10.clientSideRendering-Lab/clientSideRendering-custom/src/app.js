import { getContacts } from "./api.js";
import { render } from "./render.js";
import mainTemplate from "./templates/mainTemplate.js";

const rootElement = document.getElementById('root')

const contacts = await getContacts()

render(mainTemplate({contacts}),rootElement)

window.addContact = function() {
   fetch('http://localhost:3030/jsonstore/contacts', {
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify({person:'Gosho',phone:'43434'})
   })
   .then((res) => res.json())
   .then((contact) => {
    render(mainTemplate({contacts: [...contacts,contact] }),rootElement)
   })
    }