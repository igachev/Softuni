const list = document.getElementById('comments')

init()

function init() {
document.getElementById('load').addEventListener('click',getComments)
document.getElementById('comment-form').addEventListener('submit',onPost)
list.addEventListener('click',onCommentClick)

getComments()
}



function displayComments(comments) {
    
    list.replaceChildren(...comments.map(createCommentCard))
}

function createCommentCard(comment) {
    const element = document.createElement('article')
    element.innerHTML = `
    <header>
    <h3>${comment.name}</h3>
    </header>
    <main>
    <p>${comment.content}</p>
    <button>Delete</button>
    </main>
    `;
    element.id = comment._id

    return element
}

async function getComments() {
const response = await fetch('http://localhost:3030/jsonstore/comments')
const data = await response.json()
const comments = Object.values(data).reverse();
displayComments(comments)
}

async function onPost(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

   const name = data.name;
   const content = data.content;

   const result = await postComment({name,content})
   list.prepend(createCommentCard(result)) 
}

async function postComment(comment) {
    const response = await fetch('http://localhost:3030/jsonstore/comments',{
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(comment)
    })

    const data = await response.json()
    return data;
}

async function deleteComment(id) {
 await fetch(`http://localhost:3030/jsonstore/comments/${id}`,{
    method:'delete'
});
 document.getElementById(id).remove()

}

function onCommentClick(e) {
if(e.target.tagName === 'BUTTON') {
   const choice = confirm('Are you sure you want to delete this comment?')
   if(choice) {
    const commentId = e.target.parentElement.parentElement.id
    deleteComment(commentId)
   }

}
}

async function updateComment(id,comment) {
const response = await fetch(`http://localhost:3030/jsonstore/comments/${id}`,{
    method:'put',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(comment)
})
return response.json()
}