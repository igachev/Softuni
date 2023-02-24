//get information about single recipe by id
//display all information about recipe

export async function showDetailView(id) {
    [...document.querySelectorAll('section')].forEach((s) => {
        s.style.display = 'none'
    })

    const recipe = await getById(id)

    document.getElementById('details-view').style.display = 'block'

    displayRecipe(recipe)
}

 async function getById(id) {
const res = await fetch(`http://localhost:3030/data/recipes/${id}`)
const recipe = res.json()
return recipe
}

 function displayRecipe(recipe) {
    document.getElementById('recipe-title').textContent = recipe.name;

    const ingridientsFragment = document.createDocumentFragment()
    for(let item of recipe.ingredients) {
        const element = document.createElement('li')
        element.textContent = item
        ingridientsFragment.appendChild(element)
    }
    document.getElementById('recipe-ingridients').replaceChildren(ingridientsFragment)

    const stepsFragment = document.createDocumentFragment()
    for(let item of recipe.steps) {
        const element = document.createElement('li')
        element.textContent = item
        stepsFragment.appendChild(element)
    }
    document.getElementById('recipe-steps').replaceChildren(stepsFragment)
}