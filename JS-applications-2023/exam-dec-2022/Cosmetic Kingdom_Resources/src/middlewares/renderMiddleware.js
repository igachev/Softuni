import {render} from '../../node_modules/lit-html/lit-html.js'
import { navView } from '../views/navView.js'

const header = document.querySelector('.header-navigation')
const mainElement = document.querySelector('main')

 const renderContent = (template) => {
    render(template,mainElement)
 }

 export const renderNav = (ctx,next) => {
    render(navView(ctx),header)
    next()
 }

 export const renderMiddleware = (ctx,next) => {
    ctx.render = renderContent
    next()
 }