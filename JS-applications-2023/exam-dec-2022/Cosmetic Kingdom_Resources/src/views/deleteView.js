import * as productService from '../services/productService.js'

export const deleteView = async(ctx) => {
    try {
        const product = await productService.getOne(ctx.params.productId)
        let confirmDelete = confirm(`Are you sure you want to delete ${product.name} ?`)
        if(confirmDelete) {
           await productService.deleteOne(ctx.params.productId)
           ctx.page.redirect('/products')
        }
    } catch (error) {
        alert(error)
    }
}