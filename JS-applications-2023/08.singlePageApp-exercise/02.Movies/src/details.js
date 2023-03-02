import { editPage } from "./edit.js"
import { homePage } from "./home.js"
import { showView } from "./util.js"

const detailsSection = document.querySelector('#movie-example')

export  function detailsPage(id) {
   // detailsSection.innerHTML = ''
   
   showView(detailsSection)
    displayMovie(id)
}

 async function displayMovie(id) {


    const user = JSON.parse(localStorage.getItem('user'))
    
    

    const [movie,likes,ownLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id,user)
    ])
   
   detailsSection.replaceChildren(createMovieCard(movie,user,likes,ownLike))
}

 function createMovieCard(movie,user,likes,ownLike) {
    const isOwner = user ? user._id === movie._ownerId : false
const element = document.createElement('div')


element.classList.add('container')
element.innerHTML = `<div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}"
        alt="Movie">
        </div>
        <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>${movie.description}</p>
        <a ${isOwner ? 'style="visibility: visible"' : 'style="visibility: hidden"'} class="btn btn-danger" data-delete="delete" href="#">Delete</a>
        <a ${isOwner ? 'style="visibility: visible"' : 'style="visibility: hidden"'} class="btn btn-warning" data-edit="edit" href="#">Edit</a>
        <a ${!ownLike && !isOwner && user ? 'style="visibility: visible"' : 'style="visibility: hidden"'} class="btn btn-primary" data-like="like" href="#">Like</a>
        <span ${ !isOwner && user ? 'style="visibility: visible"' : 'style="visibility: hidden"'} class="enrolled-span">Liked ${likes}</span>
        </div>
        </div>`

const likeBtn = element.querySelector('[data-like="like"]')
if(likeBtn) {
    likeBtn.addEventListener('click',(e) => {
            likeMovie(e,movie._id)
           
    })
} 

/*const unlikeBtn = element.querySelector('[data-unlike="unlike"]')
if(unlikeBtn) {
    unlikeBtn.addEventListener('click',(e) => {
            unlikeMovie(e,movie._id)
    })
} */

//delete a movie 
const deleteBtn = element.querySelector('[data-delete="delete"]')
if(deleteBtn) {
    deleteBtn.addEventListener('click',(e) => {
        deleteMovie(movie._id)
    })
    
}

//edit a movie
const editBtn = element.querySelector('[data-edit="edit"]')
if(editBtn) {
    editBtn.addEventListener('click',(e) => {
        editPage(movie.title,movie.description,movie.img,movie._id)
    })
} 

return element
}

/* function createControls(movie,user,ownLike,likes) {
    const isOwner = user ? user._id === movie._ownerId : false
    let controls = []

    if(isOwner) {
        controls.push('<a class="btn btn-danger" data-delete="delete" href="#">Delete</a>')
        controls.push('<a class="btn btn-warning" data-edit="edit" href="#">Edit</a>')
        controls.push('<a style="display: none" class="btn btn-primary" data-like="like" href="#">Like</a>')
        controls.push(`<span style="display: none" class="enrolled-span">Liked ${likes}</span>`) 
    }
    else if(user && ownLike === false && !isOwner) {
        controls.push('<a style="display: none" class="btn btn-danger" data-delete="delete" href="#">Delete</a>')
        controls.push('<a style="display: none" class="btn btn-warning" data-edit="edit" href="#">Edit</a>')
        controls.push('<a class="btn btn-primary" data-like="like" href="#">Like</a>')
        controls.push(`<span style="display: none" class="enrolled-span">Liked ${likes}</span>`) 
           
    }
    else if(user && ownLike === true && !isOwner) {
        controls.push('<a style="display: none" class="btn btn-danger" data-delete="delete" href="#">Delete</a>')
        controls.push('<a style="display: none" class="btn btn-warning" data-edit="edit" href="#">Edit</a>')
        controls.push('<a style="display: none" class="btn btn-primary" data-like="like" href="#">Like</a>')
        controls.push(`<span class="enrolled-span">Liked ${likes}</span>`) 
}

    return controls.join('')
} */

async function getMovie(id) {
    const res = await fetch(`http://localhost:3030/data/movies/${id}`)
    const movie = await res.json()
    return movie;
}

async function getLikes(id) {
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
    const likes = await res.json()
    return likes;
}

async function getOwnLike(movieId,user) {
    if(!user) {
        return false;
    }
    else {
        const userId = user._id
        const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
        const like = await res.json()
        return like.length > 0;
    }   
}


async function likeMovie(e,movieId) {
e.preventDefault()
const user = JSON.parse(localStorage.getItem('user'))
 await fetch(`http://localhost:3030/data/likes`,{
    method:'post',
    headers: {
        'Content-Type':'application/json',
        'X-Authorization': user.accessToken
    },
    body:JSON.stringify({movieId})
})


detailsPage(movieId)
}

async function unlikeMovie(e,movieId) {
    e.preventDefault()
    
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user._id
        const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
        const likesArr = await res.json()

    
    await fetch(`http://localhost:3030/data/likes/${likesArr[0]._id}`,{
        method:'delete',
        headers: {
            'X-Authorization': user.accessToken
        } 
    })
    
    detailsPage(movieId)
    }

async function deleteMovie(movieId) {
   // e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'))
   const res = await fetch(`http://localhost:3030/data/movies/${movieId}`,{
        method:'delete',
        headers: {
            'Content-Type':'application/json',
            'X-Authorization':user.accessToken
        }
    })
    const data = await res.json()
    homePage()
   
}

//window.getLikes = getLikes