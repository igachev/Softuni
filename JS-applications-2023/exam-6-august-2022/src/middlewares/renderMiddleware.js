import {render} from '../../node_modules/lit-html/lit-html.js'
import { navView } from '../views/navigationView.js'

const header = document.querySelector('header')

export const renderNavigation = (ctx,next) => {
    render(navView(ctx),header)
    next()
}


const root = document.querySelector('main')

export const renderMiddleware = (ctx,next) => {
    ctx.render = (templateResult) => render(templateResult,root)
    next()
}