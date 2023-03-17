import {homeView} from './views/homeView.js'
import page from '../node_modules/page/page.mjs'
import { loginView } from './views/loginView.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { logoutView } from './views/logoutView.js'
import { registerView } from './views/registerView.js'
import { movieView } from './views/movieView.js'

page(authMiddleware)
page(renderMiddleware)
page('/',homeView)
page('/login',loginView)
page('/register',registerView)
page('/logout',logoutView)
page('/movies/:movieId',movieView)
page('/movies',homeView)

page.start()