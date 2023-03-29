import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as albumService from '../services/albumService.js'
import * as likeService from '../services/likeService.js'

const detailsTemplate = (album,user) => html `
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${totalLikes(album._id)}</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${album._ownerId !== user._id && user?.accessToken
            ? html `<a href="/details/like/${album._id}" id="like-btn">Like</a>`
            : nothing}

            ${album._ownerId === user._id
            ? html `<a href="/details/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="/details/delete/${album._id}" id="delete-btn">Delete</a>`
            : nothing}
          </div>
        </div>
      </section>
`;

export const detailsView = (ctx) => {
    albumService.getOneAlbum(ctx.params.albumId)
    .then((album) => {
        ctx.render(detailsTemplate(album,ctx.user))
    })
}

async function totalLikes(albumId) {
  const likes = await likeService.getAllLikes(albumId)
  const likesCount = document.getElementById('likes-count')
  likesCount.textContent = likes
}