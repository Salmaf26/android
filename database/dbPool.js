const mysql = require('mysq12');
const dbOptions = require('./dbConfig');

const pool = mysql.createPool(dbOptions);

const promisePool = pool.promise();

module.exports = promisePool;


