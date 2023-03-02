import { detailsPage } from "./details.js"
import { showView } from "./util.js"

const editSection = document.querySelector('#edit-movie')
const form = editSection.querySelector('form')

export function editPage(titleInfo,descriptionInfo,imgInfo,movieId) {
    showView(editSection)
    document.querySelector('#edit-movie #title').value = titleInfo
    document.querySelector('#edit-movie textarea').value = descriptionInfo
    document.querySelector('#edit-movie #imageUrl').value = imgInfo;
   
    form.addEventListener('submit',async(e) => {
       await updateMovie(e,movieId)
    })
}

async function updateMovie(e,movieId) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title')
    const description = formData.get('description')
    const img = formData.get('img')
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.accessToken

    await onUpdate(movieId,token,{_id:movieId,_ownerId:token,title,description,img})
    detailsPage(movieId)
}

async function onUpdate(id,token,movie) {
const res = await fetch(`http://localhost:3030/data/movies/${id}`,{
    method:'put',
    headers: {
        'Content-Type':'application/json',
        'X-Authorization':token
    },
    body:JSON.stringify(movie)
})
    const data = await res.json()
    return data;
}