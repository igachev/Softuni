const Game = require('../models/Game.js')

exports.getAll = async () => {
    const games = await Game.find({}).lean()
    return games;
}

exports.create = async (platform,name,image,price,genre,description,owner) => {
    const game = await Game.create({platform,name,image,price,genre,description,owner})
    return game;
}

exports.getOne = async (gameId) => {
    const game = await Game.findById(gameId).lean()
    return game;
}

exports.buy = async (gameId,userId) => {
    const game = await Game.findById(gameId)
    game.boughtBy.push(userId)
    await game.save()
}

exports.deleteOne = async (gameId) => {
    const game = await Game.findByIdAndDelete(gameId)
    return game
}

exports.editOne = async (gameId,data) => {
    const game = await Game.findByIdAndUpdate(gameId,data,{runValidators:true})
    return game;
}

exports.searchByNameAndPlatform = async (name,platform) => {
    let games =  Game.find({})

    if(name) {
        const regex = new RegExp(name,'i')
        games = games.where('name',regex)
    }

    if(platform) {
        const regex = new RegExp(platform,'i')
        games = games.where('platform',regex)
    }

    const filteredGames = games.lean()
    return filteredGames
}