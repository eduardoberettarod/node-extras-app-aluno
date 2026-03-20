require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const usuariosRoutes = require('./routes/usuariosRoutes')
const produtosRoutes = require('./routes/produtosRoutes')

app.use('/usuarios', usuariosRoutes)
app.use('/produtos', produtosRoutes)



const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})