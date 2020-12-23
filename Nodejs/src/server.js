const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
app.use(cors());
/**
 * Driver: Select * from users;
 * Query Builders: table('users').select('*').where('')
 */


app.use(express.json());

app.use(routes);
//req = pega tudo que tem na requisição
//res = resposta

/**
 * GET busca informação no bakcend
 * POST cria informação no backend
 * PUT altera iformação npo backend
 * DELETE deleta informação no backend
 */

 /**
  * Parâmetros
  * Query: Parâmetros nomeados enviados na rota
  * Route params: parametros utilizados para identificar um recurso
  * Request body: corpo da requisição
  */


app.listen(3001);