
import * as postService from '../services/postService.js'
import * as commentService from '../services/commentService.js'

const commentTemplate = `
<div class="theme-content">
            <!-- theme-title  -->
            <div class="theme-title">
                <div class="theme-name-wrapper">
                   

                </div>
            </div>
            <!-- comment  -->

            <div class="comment">
            <div class="header"></div>

            <div id="user-comment"></div>

            </div>

            <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>

        </div>
`

export const topicDetails = (id) => {
    document.querySelector('.container').innerHTML = commentTemplate
   
    const themeTitle = document.querySelector('.theme-title')

    const topicCard = (topic) => {
        const div = document.createElement('div')
        div.classList.add('theme-name-wrapper')
        div.innerHTML = `
            <div class="theme-name">
            <h2>${topic.title}</h2>
            </div>
        `
        return div;
    }

    postService.getPostById(id)
    .then((post) => {
        themeTitle.replaceChildren(topicCard(post))
    })

   const topicInfoCard = (topic) => {
    return `
        <img src="./static/profile.png" alt="avatar">
        <p><span>${topic.username}</span> posted on <time>${topic.createDate}</time></p>
        <p class="post-content">${topic.content}</p>
    `
   }

   postService.getPostById(id)
   .then((post) => document.querySelector('.header').innerHTML = topicInfoCard(post))

   
   let userCommentDiv = document.getElementById('user-comment')
   

   const commentCard = (comment) => {
    const div = document.createElement('div')
    div.classList.add('topic-name-wrapper')
    div.innerHTML = `
    <div class="topic-name">
        <p><strong>${comment.username}</strong> commented on <time>${comment.createDate}</time></p>
        <div class="post-content">
            <p>${comment.content}</p>
        </div>
    </div>

    `
    return div
   }

   function updateComments() {
commentService.getAllComments()
.then((comments) => {
    let filterByOwner = Object.values(comments).filter((comment) => comment._ownerId === id)
  let allComments = filterByOwner.map((comment) => commentCard(comment))
    userCommentDiv.replaceChildren(...allComments)
})
   }

   updateComments()

const form = document.querySelector('form')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const username = formData.get('username').trim()
    const content = formData.get('postText').trim()
    const createDate = new Date()
    const _ownerId = id;

    if(username === '' || content === '') {
        return;
    }

    const data = {username,content,createDate,_ownerId}

    commentService.postComment(data)
    .then(() => {
        form.reset()
        updateComments()
    })
})
}