import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js';
import { navMiddleware, renderMiddleware } from "./middlewares/renderMiddleware.js";
import { createView } from './views/createView.js';
import { dashBoardView } from './views/dashboardView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { searchView } from './views/searchView.js';

page(authMiddleware)
page(navMiddleware)
page(renderMiddleware)

page('/',homeView)
page('/login',loginView)
page('/logout',logoutView)
page('/register',registerView)
page('/dashboard',dashBoardView)
page('/create',createView)
page('/search',searchView)
page('/details/:shoeId',detailsView)
page('/details/delete/:shoeId',deleteView)
page('/details/edit/:shoeId',editView)

page.start()