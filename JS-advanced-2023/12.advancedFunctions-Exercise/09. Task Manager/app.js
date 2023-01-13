function solve() {
    document.querySelector('form')
    .addEventListener('submit',createTask);
   // let openSection = document.getElementsByTagName('section')[1];
   // let inProgressSection = document.getElementsByTagName('section')[2];
  //  let completeSection = document.getElementsByTagName('section')[3];
  const [addSection,openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll("section")).map((e) => e.children[1]);

    function createTask(e) {
        e.preventDefault()
       // let form = e.target;
        
        let title = document.getElementById('task').value;
        let desc = document.getElementById('description').value;
        let date = document.getElementById('date').value;
        if(title.length === 0 || desc.length === 0 || date.length === 0) {
            return;
        }
        let newArticle =  createPartialArticle(title,desc,date,
        {class:'green',text:'Start'},{class:'red',text:'Delete'})
        //console.log(openSection.children.children[0]);
        openSection.appendChild(newArticle)
    }

   function createPartialArticle(title,desc,date,firstButtonInfo,
    secondaryButtonInfo) {
    
    let buttons = createPartialButton(firstButtonInfo,secondaryButtonInfo)
    let article = document.createElement('article')

    let h3 = document.createElement('h3')
    h3.textContent = title
    let p1 =  document.createElement('p')
    p1.textContent = "Description: " + desc
    let p2 = document.createElement('p')
    p2.textContent = "Due Date: " + date;
    article.appendChild(h3)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(buttons)

    article.addEventListener('click',handler)
    return article
    }

    function createPartialButton(firstButtonInfo,secondaryButtonInfo) {
        let div = document.createElement('div')
        div.className = 'flex'
        let b1 = document.createElement('button')
        b1.className = firstButtonInfo.class;
        b1.textContent = firstButtonInfo.text
        let b2 = document.createElement('button')
        b2.className = secondaryButtonInfo.class;
        b2.textContent = secondaryButtonInfo.text
        div.appendChild(b1)
        div.appendChild(b2)
        
        return div
    }

    function handler(e) {
        if(e.target.tagName !== 'BUTTON') {
            return;
        }
        let cmdObject = cmd()
        let btnText = e.target.innerText.toLowerCase()
        cmdObject[btnText](e)
        
    }

    function cmd() {
        return {
            start:function(e) { 
            inProgressSection.appendChild(e.currentTarget)
            e.target.parentElement.remove() //remove both buttons
            let btns =  createPartialButton(
                {class:'red',text:'Delete'},
                {class:'orange',text:'Finish'}
            )
            e.currentTarget.appendChild(btns)
            },
            delete:function(e) { e.target.parentElement.parentElement.remove()},
            finish:function(e) {
                completeSection.appendChild(e.currentTarget)
                e.target.parentElement.remove()
            }
        }
    }
}