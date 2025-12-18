const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database: "equipmentdb"
})

app.get('/', (req, res)=>{
    return res.json("From Backend Side")
})

app.get('/api/equipment',(req,res)=>{
    const sql = "select * from equipment"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8081, ()=>{
    console.log("Listening");
})