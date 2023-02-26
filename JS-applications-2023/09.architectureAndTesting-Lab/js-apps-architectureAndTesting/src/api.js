
import {get,post} from './request.js'

const baseUrl = 'http://localhost:3030'
const recipesUrl = `${baseUrl}/data/recipes`
const loginUrl = `${baseUrl}/users/login`

export const getRecipes = () => get(recipesUrl) 

export const createRecipe = (recipeData) => {
    return post(recipesUrl,recipeData)
}

export const login = (email,password) => {
    return post(loginUrl,{email,password})
}