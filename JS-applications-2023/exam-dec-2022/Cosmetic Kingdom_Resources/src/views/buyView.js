import * as buyService from '../services/boughtService.js'

export const buyView =  async (ctx) => {
try {
     
  //  const totalBought = await buyService.totalBought(ctx.params.productId)
  await buyService.addBuys({productId:ctx.params.productId})
  const totalBought = await  buyService.totalBought(ctx.params.productId)
  
     document.getElementById('buys').textContent = totalBought
    document.getElementById('buy-btn').style.display = 'none'
    
    

} catch (error) {
    alert(error)
}
}