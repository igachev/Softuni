
import { homeView } from "./views/homeView.js"


const routes = {
    '/':homeView
}

export const router = (path) => {
const renderer = routes[path]
renderer()
}