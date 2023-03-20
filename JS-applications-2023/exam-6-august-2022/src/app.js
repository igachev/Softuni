import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { renderMiddleware, renderNavigation } from './middlewares/renderMiddleware.js'
import { applicationView } from './views/applicationView.js'
import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { deleteView } from './views/deleteView.js'
import { detailsView } from './views/detailsView.js'
import { editView } from './views/editView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { logoutView } from './views/logoutView.js'
import { registerView } from './views/registerView.js'


page(authMiddleware)
page(renderNavigation)
page(renderMiddleware)

page('/',homeView)
page('/login',loginView)
page('/register',registerView)
page('/logout',logoutView)
page('/dashboard',dashboardView)
page('/create',createView)
page('/details/:offerId',detailsView)
page('/details/edit/:offerId',editView)
page('/details/delete/:offerId',deleteView)
page('/details/applications/:offerId',applicationView)

page.start()