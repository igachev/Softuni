import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { renderMiddleware, renderNav } from './middlewares/renderMiddleware.js'
import { buyView } from './views/buyView.js'
import { createView } from './views/createView.js'
import { deleteView } from './views/deleteView.js'
import { detailsView } from './views/detailsView.js'
import { editView } from './views/editView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { logoutView } from './views/logoutView.js'
import { productsView } from './views/productsView.js'
import { registerView } from './views/registerView.js'

page(authMiddleware)
page(renderNav)
page(renderMiddleware)

page('/login',loginView)
page('/register',registerView)
page('/',homeView)
page('/logout',logoutView)
page('/products',productsView)
page('/create',createView)
page('/products/details/:productId',detailsView)
page('/products/edit/:productId',editView)
page('/products/delete/:productId',deleteView)
page('/products/buy/:productId',buyView)

page.start()