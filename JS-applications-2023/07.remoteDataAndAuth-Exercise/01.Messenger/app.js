function attachEvents() {
    
    
    let submitBtn = document.getElementById('submit')
    let refreshBtn = document.getElementById('refresh')

    submitBtn.addEventListener('click',messageSent)
    refreshBtn.addEventListener('click',getMessages)

    async function messageSent() {
    let authorInput = document.getElementsByTagName('input')[0].value;
    let contentInput = document.getElementsByTagName('input')[1].value;
    const result = await postMessage({author:authorInput,content:contentInput})
    //console.log(result);
    }

    async function postMessage(message) {
        const res = await fetch(`http://localhost:3030/jsonstore/messenger`,{
         method:'post',
         headers: {
            'Content-Type':'application/json'
         },
         body:JSON.stringify(message)   
        })

        const data = await res.json()
        return data;
    }

    async function getMessages() {
        const res = await fetch(`http://localhost:3030/jsonstore/messenger`)
        const data = await res.json()
        const messages = Object.values(data)
       // console.log(messages);
        displayMessages(messages)
    }
       
    function displayMessages(messages) {
        let messageArea = document.getElementById('messages')
        messageArea.value = ''
        let result = messages.map((msg) => 
        `${msg.author}: ${msg.content}`)
        .join('\n');
        messageArea.value = result;
    }
}

attachEvents();