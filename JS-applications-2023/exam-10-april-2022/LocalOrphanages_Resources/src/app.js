import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { navigationMiddleware, renderMiddleware } from './middlewares/renderMiddleware.js'
import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { deleteView } from './views/deleteView.js'
import { detailsView } from './views/detailsView.js'
import { donationView } from './views/donateView.js'
import { editView } from './views/editView.js'
import { loginView } from './views/loginView.js'
import { logoutView } from './views/logoutView.js'
import { ownPostsView } from './views/ownPostsView.js'
import { registerView } from './views/registerView.js'

page(authMiddleware)
page(navigationMiddleware)
page(renderMiddleware)

page('/',dashboardView)
page('/login',loginView)
page('/logout',logoutView)
page('/register',registerView)
page('/dashboard',dashboardView)
page('/posts',ownPostsView)
page('/create',createView)
page('/details/:postId',detailsView)
page('/details/edit/:postId',editView)
page('/details/delete/:postId',deleteView)
page('/details/donate/:postId',donationView)

page.start()