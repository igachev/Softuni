import {router} from './router.js'
import {topicDetails} from './views/commentView.js'
router('/')

const nav = document.querySelector('header nav')
nav.addEventListener('click',(e) => {
    e.preventDefault()
    if(e.target.tagName === 'A') {
        const url = new URL(e.target.href)
        router(url.pathname)
    }
})


const container = document.querySelector('.container')

  container.addEventListener('click', (e) => {
    if(e.target.tagName === 'H2') {
      e.preventDefault()
      topicDetails(e.target.parentElement.dataset.id)
  }
  })
 

