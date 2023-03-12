
import * as postService from '../services/postService.js'

 const homeTemplate = `
 <main>
 <div class="new-topic-border">
     <div class="header-background">
         <span>New Topic</span>
     </div>
     <form>
         <div class="new-topic-title">
             <label for="topicName">Title <span class="red">*</span></label>
             <input type="text" name="topicName" id="topicName">
         </div>
         <div class="new-topic-title">
             <label for="username">Username <span class="red">*</span></label>
             <input type="text" name="username" id="username">
         </div>
         <div class="new-topic-content">
             <label for="postText">Post <span class="red">*</span></label>
             <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
         </div>
         <div class="new-topic-buttons">
             <button class="cancel">Cancel</button>
             <button class="public">Post</button>
         </div>

     </form>
 </div>

 <div class="topic-title">
<!-- topic component  -->
<div class="topic-container"></div>
 </div>
</main>
    `;

    export const homeView = () => {
     document.querySelector('.container').innerHTML = homeTemplate

     const newTopicForm = document.querySelector('form')
     
     updatePosts()

     newTopicForm.addEventListener('submit',(e) => {
        e.preventDefault()
    
        const formData = new FormData(newTopicForm)
        const title = formData.get('topicName').trim();
        const username = formData.get('username').trim()
        const content = formData.get('postText').trim()
        const createDate = new Date()

        if(title === '' || username === '' || content === '') {
            return;
        }

            const data = {
                title,
                username,
                content,
                createDate
            }
            postService.createPost(data)
            .then(() => {
                updatePosts()
                newTopicForm.reset()
            })  
    })

    const cancelBtn = document.querySelector('.cancel')
    cancelBtn.addEventListener('click',(e) => {
        e.preventDefault()
        document.getElementById('topicName').value = ''
        document.getElementById('username').value = ''
        document.getElementById('postText').value = ''
    })

    }

    function updatePosts()  {
        const topicContainer = document.querySelector('.topic-container')
        const topicCard = (topic) => {
            const div = document.createElement('div')
            div.classList.add('topic-name-wrapper')
            div.innerHTML = `
            <div class="topic-name">
                <a data-id="${topic._id}" href="/comments/${topic._id}" class="normal">
                    <h2>${topic.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${topic.createDate}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${topic.username}</span></p>
                        </div>
                    </div>
                </div>
            </div> `
            return div
        }
    
        postService.getAllPosts()
        .then((posts) => {
            let topicCards = Object.values(posts).map((post) => topicCard(post));
            topicContainer.replaceChildren(...topicCards)
        }) 
    }
     

     

    