import {render,html} from '../node_modules/lit-html/lit-html.js'

 const homeTemplate = () => html `
<h1>Home</h1>
<p>Lorem lo lor leele lelele lelel 123</p>
`

const root = document.getElementById('root')

export const homeView = (ctx) => {
   render(homeTemplate(),root)
    } 