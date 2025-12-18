const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(express.json()) 
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

app.post('/api/equipment',(req,res)=>{
    const sql = "INSERT into equipment (`name`,`type`,`status`,`date`) values (?,?,?,?)";
    const values = [
        req.body.name,
        req.body.type,
        req.body.status,
        req.body.date,
    ]
    db.query(sql, values,( err,data)=>{
        if(err) return res.json(err);
        return res.json("Added Equipment")
    })
})

app.put('/api/equipment/:id',(req,res)=>{
    const sql = "Update equipment set `name`=?, `type`=?, `status`=?, `date` = ? WHERE `eid` =? ";
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.type,
        req.body.status,
        req.body.date,
    ]
    db.query(sql, [...values, id],( err,data)=>{
        if(err) return res.json(err);
        return res.json("Updated Equipment")
    })
})

app.delete('/api/equipment/:id',(req,res)=>{
    const sql = "Delete from equipment WHERE `eid` =? ";
    const id = req.params.id;

    db.query(sql, [id],( err,data)=>{
        if(err) return res.json(err);
        return res.json("Deleted Equipment")
    })
})

app.listen(8081, ()=>{
    console.log("Listening");
})