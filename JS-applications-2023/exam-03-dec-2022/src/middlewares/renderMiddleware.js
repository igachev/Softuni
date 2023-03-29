import {render} from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js'

const header = document.querySelector('header')
const root = document.querySelector('main')

export const navigationMiddleware = (ctx,next) => {
render(navigationView(ctx),header)
    next()
}

export const renderMiddleware = (ctx,next) => {
    ctx.render = (templateResult) => render(templateResult,root)
    next()
}