import {render} from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js'

const header = document.querySelector('header')
const main = document.getElementById('main-content')

export const navigationMiddleware = (ctx,next) => {
    render(navigationView(ctx),header)
    next()
}

export const renderMiddleware = (ctx,next) => {
    ctx.render = (templateResult) => render(templateResult,main)
    next()
}