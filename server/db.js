
// require ('dotenv').config()
const Pool = require("pg").Pool;

const pool = new Pool({
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // host: process.env.HOST,
  // port: 5432,
  // database: process.env.DATABASE,


  user : "postgres",
password : "1234",
host : "localhost",
port:5432,
database : "perntodo",
});

module.exports = pool;