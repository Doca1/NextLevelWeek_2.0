//Servidor
const express = require('express')
const server = express()

const  { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
// receber os dados do req.bory
.use(express.urlencoded({extended: true}))
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)