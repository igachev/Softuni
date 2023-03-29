import * as albumService from '../services/albumService.js'

export const deleteView = async (ctx) => {
try {
    let confirmDelete = confirm('Do you want to delete this album ?')
    if(confirmDelete) {
        await albumService.deleteAlbum(ctx.params.albumId)
        ctx.page.redirect('/dashboard')
    }
} catch (error) {
    alert(error)
}
}