import * as donationService from '../services/donationService.js'

export const donationView = async (ctx) => {
    try {
        let postId = {postId:ctx.params.postId}
await donationService.makeDonation(postId)
const donations = await donationService.postTotalDonations(ctx.params.postId)
document.querySelector('.donate-Item').textContent = 'Donate Materials: ' + donations
document.querySelector('.donate-btn').style.display = 'none'
    } catch (error) {
        alert(error)
    }
}