import * as offerService from '../services/offerService.js'

export const deleteView = async(ctx) => {
    try {
        const offer = await offerService.getOne(ctx.params.offerId)
        let confirmDelete = confirm(`Do you want to delete ${offer.title}?`)
        if(confirmDelete) {
            await offerService.deleteOne(ctx.params.offerId)
            ctx.page.redirect('/dashboard')
        }
    } catch (error) {
        alert(error)
    }
}