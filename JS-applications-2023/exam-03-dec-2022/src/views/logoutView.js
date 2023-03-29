import * as userService from '../services/userService.js'

export const logoutView = async (ctx) => {
try {
    await userService.logout()
    ctx.page.redirect('/')
} catch (error) {
    alert(error)
}
}