const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const urlDB = `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`;

const connection = mysql2.createPool(urlDB);

module.exports = connection.promise();
