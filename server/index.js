require ('dotenv').config()
const express = require("express");
const routes = require("./routes/routes");

const cors = require("cors");
// const pool = require("./db");


//express app
const app = express();


//middleware
app.use(cors());
app.use(express.json()); //req.body



//routes 
app.use("/api", routes);


//listen for request 
app.listen(process.env.PORT, ()=>{
console.log(`server is started on ${process.env.PORT} `)
})