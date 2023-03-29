import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { navigationMiddleware, renderMiddleware } from './middlewares/renderMiddleware.js'
import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { deleteView } from './views/deleteView.js'
import { detailsView } from './views/detailsView.js'
import { editView } from './views/editView.js'
import { homeView } from './views/homeView.js'
import { likeView } from './views/likeView.js'
import { loginView } from './views/loginView.js'
import { logoutView } from './views/logoutView.js'
import { registerView } from './views/registerView.js'

page(authMiddleware)
page(navigationMiddleware)
page(renderMiddleware)

page('/',homeView)
page('/login',loginView)
page('/logout',logoutView)
page('/register',registerView)
page('/dashboard',dashboardView)
page('/add',createView)
page('/details/:albumId',detailsView)
page('/details/edit/:albumId',editView)
page('/details/delete/:albumId',deleteView)
page('/details/like/:albumId',likeView)

page.start()