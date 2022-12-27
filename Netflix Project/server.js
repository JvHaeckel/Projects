const express = require("exprees"); /* Criar o servidor local*/
const path = require('path')  /* Referenciar os acaminhos que estamos servindo*/

let initialPath = path.join(__dirname, 'public'); /* dirname - pega o diretório atual*/

/* Instancia de aplicação do nosso servidor*/

let app = express();
app.use(express.static)

/* Porta de entrada para acessar o conteúdo*/ 
