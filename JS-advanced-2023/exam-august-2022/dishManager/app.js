window.addEventListener("load", solve);

function solve() {
  let submitBtn = document.getElementById('form-btn')
  submitBtn.addEventListener('click',(e) => {
    e.preventDefault()
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let age = document.getElementById('age').value;
    let genderSelect = document.getElementById('genderSelect').value;
    let task = document.getElementById('task').value;

    let ul = document.getElementById('in-progress')
    let counter = document.getElementById('progress-count')

    if(firstName === '' || lastName === '' ||
    age === '' || task === '') {
      return;
    }

    let li = document.createElement('li')
    li.classList.add('each-line')

    let article = document.createElement('article')

    let h4 = document.createElement('h4')
    h4.textContent = `${firstName} ${lastName}`

    let p1 = document.createElement('p')
    p1.textContent = `${genderSelect}, ${age}`

    let p2 = document.createElement('p')
    p2.textContent = `Dish description: ${task}`

    article.appendChild(h4)
    article.appendChild(p1)
    article.appendChild(p2)
    li.appendChild(article)

    let editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit'

    let completeBtn = document.createElement('button')
    completeBtn.classList.add('complete-btn')
    completeBtn.textContent = 'Mark as complete'

    li.appendChild(editBtn)
    li.appendChild(completeBtn)
    ul.appendChild(li)

    counter.textContent = `${Number(counter.textContent) + 1}`

     document.getElementById('first-name').value = '';
     document.getElementById('last-name').value = '';
     document.getElementById('age').value = '';
     document.getElementById('task').value = '';

     editBtn.addEventListener('click',(e) => {
      document.getElementById('first-name').value = firstName;
      document.getElementById('last-name').value = lastName;
      document.getElementById('age').value = age;
      document.getElementById('task').value = task;

      e.target.parentNode.remove()
      counter.textContent = `${Number(counter.textContent) - 1}`
     })


     completeBtn.addEventListener('click',(e) => {
      let copyArticle = e.target.parentNode.cloneNode(true);
      e.target.parentNode.remove()
      let finishedUl = document.getElementById('finished')

      copyArticle.children[1].remove();
      copyArticle.children[1].remove();

      finishedUl.appendChild(copyArticle)
      counter.textContent = `${Number(counter.textContent) - 1}`
     })


     let clearBtn = document.getElementById('clear-btn')
     clearBtn.addEventListener('click',() => {
      let finishedUl = document.getElementById('finished')
      finishedUl.innerHTML = ''
     })
  })
}
