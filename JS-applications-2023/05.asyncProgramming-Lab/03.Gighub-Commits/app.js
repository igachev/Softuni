async function loadCommits() {
    // Try it with Fetch API
    let username = document.getElementById('username').value
    let repo = document.getElementById('repo').value
    let ulCommits = document.getElementById('commits')
   
    try {
const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
   
   if(!response.ok) {
    throw new Error(`Error: ${response.status} (Not Found)`)
   }

   const data = await response.json()

   let commits = data.map((item) => {
    let liElement = document.createElement('li')
    liElement.textContent = `${item.commit.author.name}: ${item.commit.message}`
    return liElement
   })
   console.log(...commits);

   ulCommits.replaceChildren(...commits)

    } catch (err) {
        ulCommits.textContent = err.message
    }
}

