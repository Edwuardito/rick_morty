const server = require('./app')
const PORT = 3001
const { conn } = require('./DB_connection')


server.listen(PORT,async() => {
    console.log(`server raised in port ${PORT}`)
    await conn.sync({force:true})
})

























// const http = require('http')
// const getCharById = require('./controllers/getCharById')

// http
// .createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin','*')
//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1)
//         getCharById(res,+id)
//     }
// })
// .listen(3001)