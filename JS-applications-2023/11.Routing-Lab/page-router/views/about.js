import {render,html} from '../node_modules/lit-html/lit-html.js'

const aboutTemplate = () => html `
<h1>About</h1>
<p>Lorem lo lor leele lelele lelel 123</p>
`
const root = document.getElementById('root')

export const aboutView = (ctx) => {
   render(aboutTemplate(),root)
    } 