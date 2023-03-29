import * as likeService from '../services/likeService.js'

export const likeView = async (ctx) => {
let albumId = ctx.params.albumId;
await likeService.addLike({albumId})
const totalLikes = await likeService.getAllLikes(albumId)
document.getElementById('like-btn').style.display = 'none'
document.getElementById('likes-count').textContent = totalLikes
}