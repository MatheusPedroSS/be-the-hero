const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*
* Rota / recursos
* -D instala a dependencia como de desenvolvimento ela não vai subir para produtoção
*/

/*
* Métodos HTTP:
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos o "?" (filtro, paginação...)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server. 
 * NoSQP: MongoDB, CouchDB, etc
 */
 
/**
 * Driver: SELECT * FROM users
 * Query Builder (ferramenta => knex): table('users').select('*').where()
 */

