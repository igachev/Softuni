function solution() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    let main = document.getElementById('main')

    async function listOfArticles() {
        try {
            let res = await fetch(url)
            let data = await res.json()
            // console.log(data);

            let articles = data.map((article) => {
                let div1 = document.createElement('div')
                div1.classList.add('accordion')

                let div2 = document.createElement('div')
                div2.classList.add('head')

                let span1 = document.createElement('span')
                span1.textContent = `${article.title}`

                let btn1 = document.createElement('button')
                btn1.textContent = 'More'
                btn1.classList.add('button')
                btn1.setAttribute('id', `${article._id}`)
                btn1.addEventListener('click', getMoreInfo)

                let div3 = document.createElement('div')
                div3.classList.add('extra')

                let p1 = document.createElement('p')

                div3.appendChild(p1)
                div2.appendChild(span1)
                div2.appendChild(btn1)
                div1.appendChild(div2)
                div1.appendChild(div3)
                return div1
            })

            main.replaceChildren(...articles)
        } catch (error) {
            console.log(error);
        }
    }

    async function getMoreInfo(e) {
        try {
            let extraDiv = e.target.parentElement.parentElement.children[1]
            if (e.target.textContent === 'More') {
                let url2 = `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`
                let res2 = await fetch(url2)
                let data2 = await res2.json()

                let pElement = e.target.parentElement.parentElement.children[1].children[0];
                pElement.textContent = data2.content

                extraDiv.style.display = 'block'
                e.target.textContent = 'Less'
            }
            else {
                extraDiv.style.display = 'none'
                e.target.textContent = 'More'
            }

        } catch (error) {
            console.log(error);
        }
    }

    listOfArticles()
}

solution()