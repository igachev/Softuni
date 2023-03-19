import {render} from '../../node_modules/lit-html/lit-html.js'
import { navView } from '../views/navigationView.js'

const main = document.querySelector('main')
const header = document.querySelector('header')

const renderView = (templateResult) => {
console.log(templateResult);
render(templateResult,main)
}

export const navMiddleware = (ctx,next) => {
    render(navView(ctx),header)
    next()
}

export const renderMiddleware = (ctx,next) => {
    ctx.render = (templateResult) => render(templateResult,main)
    next()
}