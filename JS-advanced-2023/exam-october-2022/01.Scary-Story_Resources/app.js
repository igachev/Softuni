window.addEventListener("load", solve);

function solve() {
  let previewList = document.getElementById('preview-list')
  
  let publishBtn = document.getElementById('form-btn')

    publishBtn.addEventListener('click',(e) => {
      e.preventDefault()
      
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let age = document.getElementById('age').value;
  let storyTitle = document.getElementById('story-title').value;
  let genre = document.getElementById('genre').value;
  let story = document.getElementById('story').value;

  if(firstName === '' || lastName === '' ||
  age === '' || storyTitle === '' || story === '') {
    return;
  }

      let li = document.createElement('li')
      li.classList.add('story-info')
  
      let article = document.createElement('article')
  
      let h4 = document.createElement('h4')
      h4.textContent = `Name: ${firstName} ${lastName}`
  
      let p1 = document.createElement('p')
      p1.textContent = `Age: ${age}`
  
      let p2 = document.createElement('p')
      p2.textContent = `Title: ${storyTitle}`
  
      let p3 = document.createElement('p')
      p3.textContent = `Genre: ${genre}`

      let p4 = document.createElement('p')
      p4.textContent = `${story}`
  
      article.appendChild(h4)
      article.appendChild(p1)
      article.appendChild(p2)
      article.appendChild(p3)
      article.appendChild(p4)
      li.appendChild(article)
  
      let saveBtn = document.createElement('button')
      saveBtn.classList.add('save-btn')
      saveBtn.textContent = 'Save Story'
  
      let editBtn = document.createElement('button')
      editBtn.classList.add('edit-btn')
      editBtn.textContent = 'Edit Story'
  
      let deleteBtn = document.createElement('button')
      deleteBtn.classList.add('delete-btn')
      deleteBtn.textContent = 'Delete Story'
  
      li.appendChild(saveBtn)
      li.appendChild(editBtn)
      li.appendChild(deleteBtn)
  
      previewList.appendChild(li)

   document.getElementById('first-name').value = '';
   document.getElementById('last-name').value = '';
   document.getElementById('age').value = '';
   document.getElementById('story-title').value = '';
   document.getElementById('story').value = '';

   publishBtn.disabled = true;

   editBtn.addEventListener('click',editInfo)
   saveBtn.addEventListener('click',storyCompleted)
   deleteBtn.addEventListener('click',removeItem)
    })
  
    function editInfo() {
      let copyNode = previewList.cloneNode(true)
      let name = copyNode.children[1].children[0].children[0].textContent
      let splitName = name.split(' ')
      let firstName = splitName[1]
      let lastName = splitName[2]
      let age = copyNode.children[1].children[0].children[1].textContent
      let splitAge = age.split(' ')
      let ageValue = splitAge[1]
      let title = copyNode.children[1].children[0].children[2].textContent
      let splitTitle = title.split(' ')
      let titleValue = splitTitle[1]
      let genre = copyNode.children[1].children[0].children[3].textContent
      let splitGenre = genre.split(' ')
      let genreValue = splitGenre[1]
      let story = copyNode.children[1].children[0].children[4].textContent

   document.getElementById('first-name').value = firstName;
   document.getElementById('last-name').value = lastName;
   document.getElementById('age').value = ageValue;
   document.getElementById('genre').value = genreValue
   document.getElementById('story-title').value = titleValue;
   document.getElementById('story').value = story;

   publishBtn.disabled = false;
   previewList.children[1].remove()
    }

    function storyCompleted() {
      let h1 = document.createElement('h1')
      h1.textContent = "Your scary story is saved!"
      let main = document.getElementById('main')
      main.children[0].remove()
      main.children[0].remove()
      document.getElementById('main').appendChild(h1)
    }

    function removeItem() {
    publishBtn.disabled = false;
   previewList.children[1].remove()
    }
}
