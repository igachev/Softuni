function getArticleGenerator(articles) {
    // TODO
    let content = document.getElementById('content')
    let copyOfArticles = JSON.parse(JSON.stringify(articles))
    return () => {
        if(copyOfArticles.length === 0) {
            return;
        }

        let currentArticle = copyOfArticles.shift()
        content.innerHTML += `<article>${currentArticle}</article>`
    }
}
