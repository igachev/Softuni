import page from './node_modules/page/page.mjs'
import { aboutView } from './views/about.js'
import { articleDetailsView } from './views/articleDetailsView.js'
import { articlesView } from './views/articles.js'
import { createView } from './views/create.js'
import { homeView } from './views/home.js'



page('/home',homeView)
page('/articles',articlesView)
page('/articles/:articleId',articleDetailsView)
page('/about',aboutView)
page('/create',createView)

page.start()