import * as shoeService from '../services/shoeService.js'

export const deleteView = async (ctx) => {
    try {
        const shoe = await shoeService.getOne(ctx.params.shoeId)
        const confirmDelete = confirm(`Do you want to delete ${shoe.model}?`)
        if(confirmDelete) {
            await shoeService.deleteOne(ctx.params.shoeId)
            ctx.page.redirect('/dashboard')
        }
    } catch (error) {
        alert(error)
    }
    
}