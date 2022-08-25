

const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({


    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  

//   user : "postgres",
// password : "1234",
// host : "localhost",
// port:5432,
// database : "perntodo",
});

module.exports = pool;