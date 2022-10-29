function comments(input) {
let storage = {}
let listOfUsers = []
let listOfArticles = []

for(let text of input) {
    if(text.includes('user')) {
        text = text.split('user ')
        let userName = text[1];
        listOfUsers.push(userName)
    }
    else if(text.includes('article')) {
        text = text.split('article ')
        let article = text[1];
        listOfArticles.push(article)
    }
    else {
       text = text.split(': ');
       let comments = text[1]
       comments = comments.split(', ')
       let title = comments[0]
       let comment = comments[1]
       
       let postInfo = text[0].split(' ')
       let user = postInfo.shift()
       let articleName = postInfo.pop()
      // console.log(postInfo);
      
       if(listOfUsers.includes(user) && listOfArticles.includes(articleName)) {
        if(!storage.hasOwnProperty(articleName)) {
            storage[articleName] = []
        }
        
            storage[articleName].push({user,title,comment})
        
        
       }
    }
}

let entries = Object.entries(storage)

let sortByCountOfComments = entries.sort((a,b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
for(let [key,values] of sortByCountOfComments) {

    console.log(`Comments on ${key}`);
    let usernames = values
    let sortByUsernames = usernames.sort((a,b) => a.user.localeCompare(b.user))
    
    for(let result of sortByUsernames) {
     console.log(`--- From user ${result.user}: ${result.title} - ${result.comment}`);
    }
} 
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])