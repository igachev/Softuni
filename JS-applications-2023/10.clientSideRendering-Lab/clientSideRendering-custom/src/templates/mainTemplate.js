import contactListTemplate from "./contactList.js"
import navbarTemplate from "./navbar.js"



const mainTemplate = (data) => `
<header>${navbarTemplate()}</header>
<main>${contactListTemplate(data.contacts)}</main>
` 

export default mainTemplate