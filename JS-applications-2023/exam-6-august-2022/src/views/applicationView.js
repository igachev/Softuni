import * as applicationService from '../services/applicationService.js'

export const applicationView = async (ctx) => {
   try {
    const offerId = ctx.params.offerId

   await applicationService.addApplication({offerId})
   const totalApplications = await applicationService.getTotal(offerId)
    
   document.getElementById('applications').textContent = totalApplications
   document.getElementById('apply-btn').style.display = 'none'
   } catch (error) {
    alert(error)
   }
    
    
}