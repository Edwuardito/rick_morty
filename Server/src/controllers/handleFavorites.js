const {User,Favorite } = require('../DB_connection')
let myFavorites = []

const postFav  = async (req, res) => {
    try {
        const character = req.body
        const characterFound = myFavorites.find(fav => fav.id === character.id)
        
            if(characterFound) throw Error('El personaje ya existe en favoritos')
            
            // myFavorites.push(character)
            const char = await Favorite.create(character)
            const favorites = await Favorite.findAll()
            return res.status(200).json(favorites)
    } catch (error) {
        return res.status(404).send(error.message)
    }


}

const deleteFav = async (req,res) => {
    const { id } = req.params

    //myFavorites = myFavorites.filter((favorite) => favorite.id !== +id)
    const char = await Favorite.findByPk(id)
    if(char){
        await Favorite.destroy({
            where:{
                id
            }
        })
    }
    const favorites = await Favorite.findAll()
    return res.status(200).json(favorites)
}

module.exports = {
    postFav,
    deleteFav
}