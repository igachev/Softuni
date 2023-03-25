import * as orphanageService from '../services/orphanageService.js'

export const deleteView = async (ctx) => {
    try {
      //  const post = await orphanageService.getOnePost(ctx.params.postId)
    let confirmDelete = confirm(`Are you sure you want to delete this item ?`)
    if(confirmDelete) {
        await orphanageService.deletePost(ctx.params.postId)
        ctx.page.redirect('/dashboard')
    } 
    } catch (error) {
        alert(error)
    }
}