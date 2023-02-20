function attachEvents() {

   let loadPostsBtn = document.getElementById('btnLoadPosts')
   let viewBtn = document.getElementById('btnViewPost')
   let postsUl = document.getElementById('posts')

   loadPostsBtn.addEventListener('click',loadPosts)
   viewBtn.addEventListener('click',obtainComments)

   async function loadPosts() {
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts'
    try {
        let res = await fetch(postUrl)
        let data = await res.json()
        let entries = Object.entries(data)
        for(let [k,v] of entries) {
            let option = document.createElement('option')
            option.value = v.id;
            option.textContent = v.title
            postsUl.appendChild(option)
        }
    } catch (error) {
        console.log(error);
    }
   }

   async function obtainComments() {
    
    try {
        let selectedOption = document.getElementById('posts').selectedOptions[0]
        let titleElement = document.getElementById('post-title')
        let postBody = document.getElementById('post-body')
        let postComments = document.getElementById('post-comments')
        postComments.innerHTML = ''

        const postUrl = 'http://localhost:3030/jsonstore/blog/posts'
        const postRes = await fetch(postUrl)
        const postData = await postRes.json()
        const selectedPost = Object.values(postData).find((post) =>
        post.id === selectedOption.value)
        titleElement.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body

        const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`
        let commentsRes = await fetch(commentsUrl)
        let commentsData = await commentsRes.json()
       // console.log(commentsData);
        const comments = Object.values(commentsData).filter((comment) => 
        comment.postId === selectedOption.value)
       // console.log(comments);

        comments.forEach((c) => {
        const li = document.createElement('li')
        li.textContent = c.text;
        postComments.appendChild(li)
    })
    } catch (error) {
        console.log(error);
    }
   }
}

attachEvents();