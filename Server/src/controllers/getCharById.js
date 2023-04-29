const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')

const getCharById = async(req,res) => {
    try {
        const { id } = req.params

        const { data } = await axios( `${URL}/${id}` )

        if(!data.name) throw new Error(`Faltan datos del personaje de ID: ${id}`)

        const character = {
            id:data.id,
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.origin,
            image:data.image,
            status:data.status
        }
        return res.status(200).json(character)

    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }


}

module.exports = {
    getCharById
}























// const axios = require('axios')

// const getCharById = (res,id) => {
    // axios( `https://rickandmortyapi.com/api/character/${id}` )
    // .then((response) => response.data)
    // .then(({name,gender,species,origin,image,status}) => {
    //     const character = {
    //         name,
    //         gender,
    //         species,
    //         origin,
    //         image,
    //         status
            
    //     }
//         return res
//                 .writeHead(200,{"content-type":"application/json"})
//                 .end(JSON.stringify(character))
//     } )
//     .catch(error => {
//         return res
//                 .writeHead(500,{"content-type":"text/plain"})
//                 .end(error.message)
//     })
// }

// module.exports = getCharById